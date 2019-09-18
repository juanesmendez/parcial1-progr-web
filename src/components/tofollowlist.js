import React, { Component } from 'react';

import Follow from './follow';

class ToFollowList extends Component {

    state = {
        follows: []
    }

    componentDidMount() {
        this.fetchFollows();
    }

    fetchFollows() {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
            .then(result => result.json())
            .then(data => {

                for (let c of data['tofollow']) {
                    this.state.follows.push({ 'avatar': c.avatar, 'first_name': c.first_name });
                }
                console.log("TO FOLLOW");
                console.log(this.state.follows);
                this.setState({ state: this.state });
            });
    }

    render() {
        return (

            <div className="list-group">
                {this.state.follows.map((e, index) => <Follow key={index} value={e} />)}
                
            </div>


        );
    }
}

export default ToFollowList;