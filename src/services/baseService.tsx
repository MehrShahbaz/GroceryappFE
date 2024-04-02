import axios from 'axios';

const TOO_MANY_REQUESTS = 429;
const baseService = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

baseService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === TOO_MANY_REQUESTS) {
      console.error('Too many requests. Please try again after some time.');
    }

    return Promise.reject(error);
  }
);

export default baseService;
