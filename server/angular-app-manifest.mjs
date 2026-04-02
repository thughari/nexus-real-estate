
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19639, hash: 'bcc4b30bd2414d2b929d6962ba67dd0b2c812785de2a91e8dcbbcd1bc54ccfc7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: '2c39257cbdfff9f2df80cf5b200fde0f2254fa08a8a3fa20d26fdd063861649c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 56437, hash: '65e279f0adcf5bbc8b059cd15969fefa7322e2a37565cb035bbc61b2233c7e98', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-C7AGR5XI.css': {size: 41289, hash: '+z/WHicO9lE', text: () => import('./assets-chunks/styles-C7AGR5XI_css.mjs').then(m => m.default)}
  },
};
