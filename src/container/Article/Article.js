import React, { Component } from 'react';
import './Article.css';

class Article extends Component {

    render() {
        return (
            <div className="col-sm-3 text-center">
                <div className="card">
                    <img src={this.props.article.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.article.title}</h5>
                        <p className="card-text">{this.props.article.description}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>

                </div>

            </div>
        );
    }
}

export default Article;