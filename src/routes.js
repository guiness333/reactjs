import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import pagePedido from './components/InfoPedido';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Route exact path="/reactjs/"  component={Home}/>
            <Route path="/reactjs/:id" component={pagePedido}/>
        </BrowserRouter>
    )
}

export default Routes;