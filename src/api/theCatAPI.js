import myFetch from './APIUtils';

export const getRandomImageAPI = async () =>
  await myFetch({
    url: `/images/search?limit=100`,
    type: 'get',
  });
