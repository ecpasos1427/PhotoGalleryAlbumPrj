import React from "react";
import axios from "axios";

import Articles from "../components/Articles";

class ArticleListView extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    // https://digitalassetmanager.herokuapp.com/
    // http://127.0.0.1:8000/api/

    axios.get("https://digitalassetmanager.herokuapp.com/api/").then((res) => {
      this.setState({
        articles: res.data,
      });
      console.log(res.data);
    });
  }

  render() {
    return <Articles data={this.state.articles} />;
  }
}

export default ArticleListView;
