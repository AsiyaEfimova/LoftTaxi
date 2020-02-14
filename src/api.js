import axios from 'axios';

axios.defaults.baseURL = 'https://loft-taxi.glitch.me';

export const postLogin = request => axios.post('/auth', request).then(response => response.data);

export const postRegister = request => axios.post('/register', request).then(response => response.data);

export const postCard = request => axios.post('/card', request).then(response => response.data);

export const fetchCard = token => axios.get(`/card?token=${token}`, { 'headers': {'Content-Type': 'application/json'}}).then(response => response.data);

export const fetchAddressList = () => axios.get('/addressList', { 'headers': {'Content-Type': 'application/json'}}).then(response => response.data);

export const fetchRoute = ({addressFrom, addressTo}) => axios.get(`/route?address1=${addressFrom}&address2=${addressTo}`, { 'headers': {'Content-Type': 'application/json'}}).then(response => response.data);