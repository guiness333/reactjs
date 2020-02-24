import React, {Component } from 'react';
import Feed from './components/Feed'
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id:1,username:'walber',curtidas: 10, comentarios:2},
                {id:2, username:'lucas', curtidas:120, comentarios:423},
                {id:3, username:'Amanda', curtidas:140, comentarios:213},
                {id:4, username:'Ricardo', curtidas:1, comentarios:0}
            ]
        }
    }



    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                        return(
                            <Feed key={item.id} 
                            username={item.username} 
                            curtidas={item.curtidas} 
                            comentarios={item.comentarios} />
                        );
                })}
            </div>
        );
    }
}

export default App;