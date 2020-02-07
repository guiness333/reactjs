import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import infoPedido from '../../services/infoPedido';
function PagePedido(){
    let { id } = useParams();
    const [exportMessage, setExportMessage] = useState([]);
    const [isExported, setIsExported] = useState([]);
    const [customerTaxVat, setCustomerTaxVat] =  useState([]);
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
            setCustomerTaxVat(e.body.customerTaxvat);
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
            {exportMessage}<br/>
            {isExported}<br/>
            {customerTaxVat}<br/>
            {customerUF}<br/>
            {customerName}<br/>
            {customerOrderNumber}<br/>
            {orderDate}<br/>
            {orderStatus}<br/>
            
        </div>
    );
}
export default PagePedido;