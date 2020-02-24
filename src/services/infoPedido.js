
import api from './api';


async function infoPedido(id){
    let data = {};
    const response = await api.get(`order/${id}`)
    const integrationError    =    item=>  !item.isExported
    const integrationSuccess  =    item=> item.isExported
    const orderDeliveryDateNull = item=> item.OrderDeliveryDate === null;
    //const dataCorreta = item=>item.OrderDate.includes(param1)
    //const dataCorreta2 = item=>item.OrderDate.includes(param2)
    //console.log(response.data.body.items.length)
    /*data = {
        length: response.data.body.items.length,
        errosIntegracao: response.data.body.items.filter(integrationError),
        integrados: response.data.body.items.filter(integrationSuccess),
        deliveryDataNull: response.data.body.items.filter(orderDeliveryDateNull)
    }*/
    //console.log(response.data)
    return response.data;
}
export default infoPedido;