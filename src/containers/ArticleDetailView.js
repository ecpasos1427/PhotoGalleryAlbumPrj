import React from "react";
import axios from "axios";

import { Card } from "antd";

class ArticleDetailView extends React.Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    // https://digitalassetmanager.herokuapp.com/
    // http://127.0.0.1:8000/api/

    axios
      .get(`https://digitalassetmanager.herokuapp.com/api/${articleID}`)
      .then((res) => {
        this.setState({
          article: res.data,
        });
      });
  }

  render() {
    return (
      <Card title={this.state.article.title}>
        <p>{this.state.article.content}</p>
      </Card>
    );
  }
}

export default ArticleDetailView;
