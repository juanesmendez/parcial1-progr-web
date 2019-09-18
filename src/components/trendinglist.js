import React, { Component } from 'react';

import Trend from './trend';

class TrendingList extends Component {

    state = {
        trends : []
    }

    componentDidMount(){
        this.fetchTrends();
    }

    fetchTrends(){
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
            .then(result => result.json())
            .then(data=>{
                
                for(let c of data['trends']){
                    this.state.trends.push({'hashtag': c.hashtag, 'teweets' : c.teweets}); 
                }
                //console.log(this.state.trends);
                this.setState({state : this.state});
            });
    }

    render() {
        return (
            <div className="list-group">
                {this.state.trends.map((e,index) => <Trend key={index} value = {e}/>)}
            </div>
        );
    }
}

export default TrendingList;