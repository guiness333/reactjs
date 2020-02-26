import React from 'react';
import {BrowserRouter, Route, HashRouter} from 'react-router-dom';
import Home from './components/home';
import pagePedido from './components/InfoPedido';

const Routes = () =>{
    return(
        <HashRouter basename='/reactjs/'>
            <Route exact path="/"  component={Home}/>
            <Route path="/:id" component={pagePedido}/>
        </HashRouter>
    )
}

export default Routes;