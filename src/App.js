import React, {useState, useEffect} from 'react';
import getErros from './services/erros';
import './styles/style.css';
function App(){
    const [erros, setErros] = useState([]);
    const [integrados, setIntegrados] = useState([]);
    const [deliveryData, setDeliveryDate] = useState([]);
    const [data, setData] = useState(['2020-02-04']);

    useEffect( ()=>{
        getErros(data, data).then(e => {
            const [integrated, error, delivery] = e;
            setErros(error);
            setIntegrados(integrated);
            setDeliveryDate(delivery);
    })}, []);

    useEffect(() =>{
        getErros(data, data).then(e => {
            const [integrated, error, delivery] = e;
            setErros(error);
            setIntegrados(integrated);
            setDeliveryDate(delivery);
        })
    },[data])

    return(
        <div className="container">
            <h1>Pedidos</h1>
            <input type="text" name="data" value={data} onChange={(e) => {setData(e.target.value)}}/>

            <section className="geral">
                <h2 className="total">Total de Pedidos: {erros.length+integrados.length}</h2>
                <h2 className="erros">Total erros de Integração: {erros.length}</h2>
                <h2 className="integrados">Total Pedidos integrados: {integrados.length}</h2>
            </section>
            <section className="listErros">
                <ul>
                    {erros.map(erro => (
                        <li key={erro._id}>ID:{erro._id} TAXVAT: {erro.CustomerTaxvat} ORDER: {erro.CustomerOrderNumber}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
export default App;