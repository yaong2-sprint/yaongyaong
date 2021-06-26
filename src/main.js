import App from './app';

import './scss/index.scss';

async function app() {
  document.getElementById('app').appendChild(await App());
}

app();
