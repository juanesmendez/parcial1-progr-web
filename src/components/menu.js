import React, { Component } from 'react';



class Menu extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.fetchMenuInfo();
    }

    fetchMenuInfo() {
        fetch("https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json")
            .then(result => result.json())
            .then(data => {
                for (let c of data['menu']) {
                    //console.log(c.text);
                    this.state.items.push({ 'text': c.text, 'image': c.image });
                }
                this.setState({ state: this.state });
                //console.log(this.state.items);
            });
    }

    render() {
        return (
            <div className="container-float" >

                <ul className="list-group">
                    {this.state.items.map(e =>
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-3">
                                    <img src={e.image}></img>
                                </div>
                                <div className="col-9">
                                    <h5>{e.text}</h5>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                <br></br>
                <div className="row justify-content-md-center">
                    <button className="btn btn-primary"> Twittear</button>
                </div>



            </div>
        );
    }
}

export default Menu;