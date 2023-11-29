import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPicturesSearch = async (query, page) => {
  const apiKey = '39999105-294a8a0dd5096756c71c44741';
  const perPage = 12;
  const { data } = await axios.get(
    `?q=${query}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&page=${page}`
  );
  return data;
};
