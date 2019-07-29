import React, { Component } from 'react';
import Article from '../Article/Article';

class SportArtcleList extends Component {

    render() {
        if (this.props.sportNewsHeadlines.length > 0) {
            return (
                <div className="container">
                    <div className="row">
                        {
                            this.props.sportNewsHeadlines.map(article => {
                                return <Article
                                    article={article}
                                    key={article.url}
                                    {...this.props} />
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return <h3 className="text-center">loading...</h3>
        }
    }
}

export default SportArtcleList;