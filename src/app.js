import Header from '@components/Header';
import Searchbar from '@components/Searchbar';
import Cats from '@components/Cats';
// import API_ENDPOINT from './api/theCatAPI';

export default async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${Searchbar()}
      ${await Cats()}
    </div>
  `;

  return template.content.cloneNode(true);
}
