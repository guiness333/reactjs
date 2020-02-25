import React, {useState, useEffect} from 'react';
import getErros from '../../services/erros';
import '../../styles/style.css';
import { Link } from 'react-router-dom';
function Home(){
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
        setErros([]);
        getErros(data, data).then(e => {
            const [integrated, error, delivery] = e;
            console.log("request");
            setErros(error);
            setIntegrados(integrated);
            setDeliveryDate(delivery);
        })
    },[data])

    return(
        <div className="container">
            {erros.length <= 0 &&
            <img className="imagem" src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" width="100px"/>
            }
            
            
            <h1>Overview Pedidos</h1>
            
            
            <form>
                <label for="data">Data:</label>
                <input type="date" className="data" name="data" value={data} onChange={(e) => {setData(e.target.value)}}/>
            </form>
            
            <section className="geral">
                <h2 className="total">Total de Pedidos: {erros.length+integrados.length}</h2>
                <h2 className="erros">Total erros de Integração: {erros.length}</h2>
                <h2 className="integrados">Total Pedidos integrados: {integrados.length}</h2>
            </section>
            {erros.length > 0 &&
            <div>
            <section className="listErros">
                <ul>
                    {erros.map(erro => (
                        <Link className="link" key={erro._id} to={`reactjs/${erro._id}`}><li key={erro._id}><a className="erro_id">ID:{erro._id}</a> <a className="taxvat">TAXVAT: {erro.CustomerTaxvat}</a> <a className="order">ORDER: {erro.CustomerOrderNumber}</a></li></Link>
                    ))}
                </ul>
            </section>
            </div>
            }
        </div>
    );
}
export default Home;