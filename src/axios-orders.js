import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-test-burgerbuilder.firebaseio.com/'
});

export default instance;