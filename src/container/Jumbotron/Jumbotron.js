import React, { Component } from 'react';

class Jumbotron extends Component {



    render() {

        return (
            <div className="jumbotron">
                <h1 className="display-4">News App</h1>
                <p className="lead">This is a simple News app to get top news headlines</p>
                <hr className="my-4" />
                <p>This app is made with &#10084; in India</p>

            </div>
        );

    }

}



export default Jumbotron;