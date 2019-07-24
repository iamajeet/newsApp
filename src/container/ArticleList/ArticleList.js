import React, { Component } from 'react';
import Article from '../Article/Article';
class ArticleList extends Component {
    render() {
        console.log("+++++props", this.props.newsHeadlines);
        if (this.props.newsHeadlines.length > 0) {
            return (
                <div className="container-fluid">
                    <div className="row">
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
            return <h3 className="text-center">Loading...</h3>
        }

    }
}

export default ArticleList;



// {this.props.questions.map(question => {
//     if (question.id === this.props.current) {
//         return <Article question={question} key={question.id} {...this.props} />
//     }
// })}