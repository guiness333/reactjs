import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import infoPedido from '../../services/infoPedido';
function PagePedido(){
    let { id } = useParams();
    const [exportMessage, setExportMessage] = useState([]);
    const [isExported, setIsExported] = useState([]);
    const [customerTaxvat, setCustomerTaxVat] =  useState([]);
    const [customerName, setCustomerName] =  useState([]);
    const [customerOrderNumber, setCustomerOrderNumber] = useState([]);
    const [customerUF, setCustomerUF] = useState([]);
    const [orderDate,setOrderDate] = useState([]);
    const [orderStatus, setOrderStatus] = useState([]);
    const [products, setProducts] = useState([]);

    
    useEffect( ()=>{
        infoPedido(id).then(e =>{
            console.log(e)
            setExportMessage(e.body.exportMessage);
            setIsExported(e.body.isExported);
            setCustomerTaxVat(e.body.CustomerTaxvat);
            setCustomerName(e.body.CustomerName);
            setCustomerOrderNumber(e.body.CustomerOrderNumber);
            setCustomerUF(e.body.CustomerUF);
            setOrderDate(e.body.OrderDate);
            setOrderStatus(e.body.OrderStatus);
            setProducts(e.body.Order.Products);
        });
    }, []);
    
    return(
        <div>
            <section className="container">
                <h1 className="titulo">{exportMessage}</h1>
                <div>
                    <h2>taxvat: {customerTaxvat}</h2>
                    <h2>Rede: {customerName}</h2>
                    <h2>Ordem: {customerOrderNumber}</h2>
                    <h2>UF: {customerUF}</h2>
                    <h2>Data do pedido: {orderDate}</h2>
                    <h2>Status do Pedido: {orderStatus}</h2>
                </div>


            </section>
            
        </div>
    );
}
export default PagePedido;