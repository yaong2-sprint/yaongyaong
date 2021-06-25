/* eslint-disable no-console */
import API_ENDPOINT from '../api/theCatAPI';

export default async function Cats() {
  try {
    const res = await fetch(`${API_ENDPOINT}/images/search?limit=100`);
    const datas = res.json();
    let template = '';
    await datas.then((cat) => {
      cat.forEach((el) => {
        template += `
          <div style="display:inline">
            <img style="width:33%;height:300px;" src="${el.url}" />
          </div>`;
      });
    });

    return `<div style="margin-top:20px;"${template}</div>`;
  } catch (error) {
    console.log(error);
  }
}
