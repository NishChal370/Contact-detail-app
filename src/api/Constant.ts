import axios, { AxiosInstance }  from 'axios';

export const AXIOS: AxiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/users/",

});