import React, {Component } from 'react';

class Feed extends Component{
    render(){
        return(
            <div key={this.props.id}>
                <h3>nome: { this.props.username}</h3>
                    <a>{ this.props.curtidas > 1 ? this.props.curtidas + ' curtidas ' : this.props.curtidas+' curtida '}
                    {this.props.comentarios > 1 ? '| '+this.props.comentarios + ' comentários ' : ' '}
                    </a>
                <hr />
            </div>
        );npm
    }
}
export default Feed;