import React, { Component } from 'react';
import './Article.css';
import { text_truncate } from '../../helper/newsHelper';
class Article extends Component {

    render() {
        return (
            <div className="col-md-3 text-center" style={{ marginTop: "15px" }}>
                <div className="card" style={{ height: "30rem" }}>
                    <img src={this.props.article.urlToImage} className="card-img-top img-fluid" alt="..." />
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