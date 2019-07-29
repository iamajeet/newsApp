import React, { Component } from 'react';
import Article from '../Article/Article';
class ArticleList extends Component {
    render() {
        if (this.props.newsHeadlines.length > 0) {
            return (
                <div className="container">
                    <div className="row" >
                        {
                            this.props.newsHeadlines.map(article => {
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

export default ArticleList;
