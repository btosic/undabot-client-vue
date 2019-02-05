const axios = require("axios");

const serviceURL = 'http://localhost:3000/API';

export const api = {
  contactPost: (data) => {
    let url = serviceURL + '/contact';
    return axios.post(url, data);
  }
}