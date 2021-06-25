import App from './app';

async function app() {
  document.getElementById('app').appendChild(await App());
}

app();
