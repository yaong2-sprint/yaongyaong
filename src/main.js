import App from './app';

import './scss/index.scss';

async function app() {
  document.getElementById('app').appendChild(await App());

  // const $tmp = document.querySelector('.cat-image');
  // $tmp.addEventListener('click', (e) => {
  //   console.log(e);
  // });
}

app();
