import axios from 'axios';

import configs from 'configs/axios';

const { API_URL } = configs;

export default axios.create({
  baseURL: API_URL,
});
