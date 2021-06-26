const API_ENDPOINT = 'https://api.thecatapi.com/v1';

export default function myFetch({
  url,
  type = 'get',
  param,
  contentType = 'application/json',
}) {
  const URL = API_ENDPOINT + url;
  const headers = {
    'Content-Type': contentType,
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    // 'Access-Control-Allow-Headers':
    // 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
  };

  return fetch(URL, {
    method: type,
    headers,
    body: JSON.stringify(param),
  });
}
