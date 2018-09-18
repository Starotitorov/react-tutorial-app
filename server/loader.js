import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import createStore from '../src/store/createStore';
import App from '../src/features/App';
import manifest from '../build/asset-manifest.json';

const injectHTML = (data, { html, title, meta, body, scripts, state, css }) => {
  data = data.replace('<html>', `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace('</head>', `${meta}${css}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  data = data.replace('</body>', scripts.join('') + '</body>');

  return data;
};

export default (req, res) => {
  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    (err, htmlData) => {
      if (err) {
        console.error('Read error', err);

        return res.status(404).end();
      }

      const { store } = createStore(req.url);

      const sheet = new ServerStyleSheet();

      const context = {};
      const modules = [];

      frontloadServerRender(() =>
        renderToString(
          <Loadable.Capture report={m => modules.push(m)}>
            <Provider store={store}>
              <StaticRouter location={req.url} context={context}>
                <Frontload isServer>
                  <StyleSheetManager sheet={sheet.instance}>
                    <App />
                  </StyleSheetManager>
                </Frontload>
              </StaticRouter>
            </Provider>
          </Loadable.Capture>
        )
      ).then(routeMarkup => {
        if (context.url) {
          res.writeHead(302, {
            Location: context.url
          });

          res.end();
        } else {
          const extractAssets = (assets, chunks) =>
            Object.keys(assets)
              .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
              .map(k => assets[k]);

          const extraChunks = extractAssets(manifest, modules).map(
            c => `<script type="text/javascript" src="/${c}"></script>`
          );

          const css = sheet.getStyleTags();

          const helmet = Helmet.renderStatic();

          const html = injectHTML(htmlData, {
            html: helmet.htmlAttributes.toString(),
            title: helmet.title.toString(),
            css,
            meta: helmet.meta.toString(),
            body: routeMarkup,
            scripts: extraChunks,
            state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
          });

          res.send(html);
        }
      });
    }
  );
};
