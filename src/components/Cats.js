/* eslint-disable no-console */
import { getRandomImageAPI } from '../api';

export default async function Cats() {
  try {
    const res = await getRandomImageAPI();
    const datas = res.json();
    let template = '';
    await datas.then((cat) => {
      cat.forEach((el) => {
        template += `
          <div class="max-small">
            <img class="cat-image" src="${el.url}" />
          </div>`;
      });
    });

    return `<div class="template" ${template}</div>`;
  } catch (error) {
    console.log(error);
  }
}
