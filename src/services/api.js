import axios from 'axios';

const api = axios.create({
    // 'http://magento-portalas-prd.devparceiroambev.com:3000/order?limit=10000&gte=${param1}&lte=${param2}'
    baseURL: 'https://cors-anywhere.herokuapp.com/http://magento-portalas-prd.devparceiroambev.com:3000/',
    method:'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    }
});
export default api