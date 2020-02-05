
import api from './api';


async function getErros(param1,param2){
    let data = {};
    const response = await api.get(`order?limit=10000&gte=${param1}&lte=${param2}`)
    const integrationError    =    item=>  !item.isExported
    const integrationSuccess  =    item=> item.isExported
    const orderDeliveryDateNull = item=> item.OrderDeliveryDate === null;
    //const dataCorreta = item=>item.OrderDate.includes(param1)
    //const dataCorreta2 = item=>item.OrderDate.includes(param2)
    //console.log(response.data.body.items.length)
    data = {
        length: response.data.body.items.length,
        errosIntegracao: response.data.body.items.filter(integrationError),
        integrados: response.data.body.items.filter(integrationSuccess),
        deliveryDataNull: response.data.body.items.filter(orderDeliveryDateNull)
    }
    return [data.integrados, data.errosIntegracao, data.deliveryDataNull]
}
export default getErros;