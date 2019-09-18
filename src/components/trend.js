import React, { Component } from 'react';

class Trend extends Component {

    state = {
        'hashtag': this.props.value.hashtag,
        'teweets': this.props.value.teweets
    }

    render() {
        return (
            <li className="list-group-item">
                <div class="row">
                    <p class="text-left">{this.state.hashtag} {this.state.teweets}</p>
                    
                </div>

            </li>
        );
    }
}

export default Trend;