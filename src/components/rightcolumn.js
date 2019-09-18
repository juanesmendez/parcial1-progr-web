import React, { Component } from 'react';

import TrendingList from './trendinglist';
import ToFollowList from './tofollowlist';

import Footer from './footer';

class RightColumn extends Component {
    state = {}

    render() {
        return (
            <div className="container-float">

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="button">Search</button>
                    </div>
                </div>

                <br></br>
                <div className="container-float">
                    <TrendingList key="trending_list" />
                </div>
                <br></br>
                <div className="container-float">
                    <ToFollowList key="follow_list" />
                </div>
                <div className="container-float">
                    <Footer key="footer" />
                </div>
            </div>

        );
    }
}

export default RightColumn
