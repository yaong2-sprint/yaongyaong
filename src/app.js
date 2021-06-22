import Header from './components/Header';
import Searchbar from './components/Searchbar';

function App() {
  const CAT_API = 'https://api.thecatapi.com/v1';

  async function getCatdata(name) {
    const URL = `${CAT_API}/breeds/search?q=${name}`;
    const data = await fetch(URL, {
      method: 'get',
      headers: {
        'x-api-key': 'DEMO-API-KEY',
      },
    });
    const response = await data.json();
    const description = await response[0].description;
    document.body.append(description);
  }

  document.getElementById('header').innerHTML = Header();

  document.getElementById('searchbar').innerHTML = Searchbar();
  document.getElementById('searchcat').addEventListener('click', () => {
    const name = document.querySelector('#searchcat input').value;
    getCatdata(name);
  });
}

App();
