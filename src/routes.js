import React from "react";

import { Route } from "react-router-dom";

import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";
import WelcomeConstructionView from "./containers/WelcomeConstructionView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={WelcomeConstructionView} />
    <Route exact path="/articles/" component={ArticleListView} />
    <Route exact path="/article/:articleID" component={ArticleDetailView} />
  </div>
);

export default BaseRouter;
