import React, { Component } from 'react';

class Tweet extends Component {

    state = {
        'avatar': this.props.value.avatar,
        'first_name': this.props.value.first_name,
        'last_name': this.props.value.last_name,
        'nick': this.props.value.nick,
        'date': this.props.value.date,
        'content': this.props.value.content,
        'retweets': this.props.value.retweets,
        'favs': this.props.value.favs
    }

    renderRetweets = () => {
        this.state.retweets = this.state.retweets + 1;
        this.setState({ state: this.state });
    }

    renderFavs = () => {
        this.state.favs = this.state.favs + 1;
        this.setState({ state: this.state });
    }

    render() {
        return (
            <div className="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-2">
                            <img src={this.state.avatar}></img>
                        </div>
                        <div class="col-10">
                            <h5 class="card-title">{this.state.first_name} {this.state.last_name} {this.state.nick}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{this.state.date}</h6>
                            <p class="card-text">{this.state.content}</p>

                        </div>

                    </div>
                    <br></br>
                    <div className="row justify-content-md-center">
                        <div class="col-4">
                            <button class="btn btn-success" onClick={this.renderRetweets}>Retweets: {this.state.retweets}</button>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger" onClick={this.renderFavs}> Favs: {this.state.favs}</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Tweet