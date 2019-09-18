import React, { Component } from 'react';

import Menu from './menu';
import TweetList from './tweetlist';
import RightColumn from './rightcolumn';

class Board extends Component {

    state = {
        menu: {
            items: []
        },
        tweetList: {
            tweets: []
        }
    }

    componentDidMount() {
        //this.fetchMenuInfo();

    }


    

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-3">
                        <Menu key = "1"></Menu>
                    </div>
                    <div className="col-6">
                        <TweetList key="2"></TweetList>
                    </div>
                    <div className="col-3">
                        <RightColumn key="3"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;
