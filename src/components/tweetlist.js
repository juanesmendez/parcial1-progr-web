import React, { Component } from 'react';

import Tweet from './tweet';

class TweetList extends Component {

    state = {
        tweets: []
    }

    componentDidMount() {
        this.fetchTweets();
    }

    fetchTweets() {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
            .then(result => result.json())
            .then(data => {
                for (let t of data['tweets']) {
                    //console.log(t.avatar);
                    this.state.tweets.push({
                        'avatar': t.avatar,
                        'first_name': t.first_name,
                        'last_name': t.last_name,
                        'nick': t.nick,
                        'date': t.date,
                        'content': t.content,
                        'retweets': t.retweets,
                        'favs': t.favs
                    });
                }
                this.setState({ state: this.state });
                //console.log(this.state.tweets);
                //console.log(data['menu'])
            });
    }

    render() {
        return (
            <div>
                <div className="row justify-content-md-left">
                    <h3 className="text-center">Inicio</h3>
                </div>
                <div className="container-float">
                    {this.state.tweets.map(e => <Tweet key={e.nick} value={e} ></Tweet>)}
                </div>

            </div>
        );
    }
}

export default TweetList