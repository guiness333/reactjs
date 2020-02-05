import React, { Component } from 'react';
class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
                <hr />
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h3>Olá sou o {this.props.nome}</h3>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>idade: {this.props.idade} Anos</h3>
            </div>
        );
    }
}


function App(){
    return( 
        <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Walber" cargo="Coordenador do Suporte" idade="22"/>
            <Equipe nome="Anna" cargo="Análista de suporte" idade="20"/>
        </div>
    )
}

export default App;