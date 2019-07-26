import React, { Component } from 'react';
import './App.css';
import Layout from '../../container/Layout/Layout';
import ArticleList from '../../container/ArticleList/ArticleList';
import PropTypes from 'prop-types';
import { getHeadLinesNews } from '../../helper/newsHelper';
import SportArtcleList from '../../container/SportArticleList/SportArticleList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsHeadlinesData: [],
      sportNewsHeadlinesData: []
    };
  }

  componentDidMount() {
    this.fetchnewsHeadlinesDataFromApi();
    this.fetchSportsNewsDataFromApi();
  }


  fetchnewsHeadlinesDataFromApi() {
    getHeadLinesNews('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=' + this.props.apiKey).then(response => {
      this.setState({ newsHeadlinesData: response.data.articles });
      console.log(response.data.articles);
    }).catch(response => {
      console.log(response);
    });
  }
  fetchSportsNewsDataFromApi() {
    getHeadLinesNews('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=' + this.props.apiKey).then(response => {
      this.setState({ sportNewsHeadlinesData: response.data.articles });
      console.log(response.data.articles);
    }).catch(response => {
      console.log(response);
    });
  }





  render() {
    return (
      <div >
        <Layout {...this.state}>
          <h1 className="text-center" style={{ marginTop: "20px", marginBottom: "20px" }}>Top Headlines (India)</h1>
          <ArticleList newsHeadlines={this.state.newsHeadlinesData} />
          <h1 className="text-center" style={{ marginTop: "20px", marginBottom: "20px" }} >Sports</h1>
          <SportArtcleList sportNewsHeadlines={this.state.sportNewsHeadlinesData} />
        </Layout>
      </div>
    );
  };

}



App.propTypes = {
  apiKey: PropTypes.string,
};

App.defaultProps = {
  apiKey: '47daefe3a10146cb90234124eed2406c',
};

export default App;


