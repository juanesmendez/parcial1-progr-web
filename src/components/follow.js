import React, { Component } from 'react';

class Follow extends Component {

    state = {
        'following' : false,
        'avatar': this.props.value.avatar,
        'first_name': this.props.value.first_name
    }

    renderFollow = () =>{
        if (this.state.following == false){
            this.state.following = true;
        }else{
            this.state.following = false;
        }
        this.setState({state: this.state});
    }

    checkButtonFollow(){
        return this.state.following == true? "Siguiendo" : "Seguir";
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div class="col-4">
                        <img src={this.state.avatar}></img>
                    </div>
                    <div class="col-6">
                        <p>{this.state.first_name}</p>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-sm btn-outline-primary float-right" onClick={this.renderFollow}>{this.checkButtonFollow()}</button>
                    </div>

                </div>


            </li>
        );
    }
}

export default Follow;