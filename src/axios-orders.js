import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder1.firebaseio.com/'
});

export default instance;