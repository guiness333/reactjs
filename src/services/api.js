import axios from 'axios';

const api = axios.create({
    // 'http://magento-portalas-prd.devparceiroambev.com:3000/order?limit=10000&gte=${param1}&lte=${param2}'
    baseURL: 'http://magento-portalas-prd.devparceiroambev.com:3000/'
})
export default api