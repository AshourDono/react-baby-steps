import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: { apiKey: '9c5c841670fdd50404f36874552faa4c' },
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzVjODQxNjcwZmRkNTA0MDRmMzY4NzQ1NTJmYWE0YyIsInN1YiI6IjYyNWQ1MDU1YmYwOWQxMDA5OTM3MzEzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSCZC1jSmXAwKHk4kTUw0bFSJPBks84itLN0rhk_DrY`,
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
