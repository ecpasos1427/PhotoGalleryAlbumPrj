import React from "react";

import { Route } from "react-router-dom";

import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";
import WelcomeView from "./containers/WelcomeView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={WelcomeView} />
    <Route exact path="/articles/" component={ArticleListView} />
    <Route exact path="/articles/:articleID" component={ArticleDetailView} />
  </div>
);

export default BaseRouter;
