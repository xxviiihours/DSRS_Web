const { default: axios } = require('axios');

const api = axios.create({
	baseURL: 'http://localhost:5223',
});

export default api;
