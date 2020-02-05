import React from 'react';
const Equipe = (props) =>{
    return(
        <div>
            <Sobre nome={props.nome} cargo={props.cargo} 
            idade={props.idade} />
            <Social fb={props.facebook}/>
            <hr />
        </div>
    );
}

const Sobre = (props) =>{
    return (
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h2>Tenho {props.idade} Anos</h2>
            <h2>Sou {props.cargo}</h2>
        </div>
    );
}

const Social = (props) =>{
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>Linkedin </a>
            <a>Youtube </a>
        </div>
    )
}

function App(){
    return( <div>
            <h1>Conheça nossa equipe: </h1>
            <Equipe nome="Walber" cargo="Coordenador do Suporte" idade="22" facebook="https:facebook.com"/>
            <Equipe nome="Anna" cargo="Análista de Suporte" idade="20" facebook="https:facebook.com"/>
            <Equipe nome="Iris" cargo="Estagiária" idade="20" facebook="https:facebook.com"/>
            <Equipe nome="Nycolas" cargo="Análista de Suporte" idade="22" facebook="https:facebook.com"/>
        </div>
    )
}

export default App;