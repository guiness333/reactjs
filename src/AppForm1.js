import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                nome: 'Walber',
                email: 'walber@gmail.com',
                senha: '123',
                sexo: 'masculino'
            }
        }
        this.dadosForm = this.dadosForm.bind(this);
    }


    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form})
    }

    render(){
        return(
            <form>
                <h2>Login</h2>
                Nome:
                <input type="text" name="nome" value={this.state.form.nome} 
                        onChange={this.dadosForm}/><br/>
                Email:
                <input type="email" name="email" value={this.state.form.email} 
                        onChange={this.dadosForm}/><br/>
                Senha:
                <input type="password" name="senha" value={this.state.form.senha} 
                        onChange={this.dadosForm}/><br/>
                Sexo:
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                
            </form>
        );
    }

}

export default App;