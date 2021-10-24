import React from 'react';

import './App.css';

import CustomLayout from './containers/Layout';

import ArticleListView from './containers/ArticleListView';

function App() {
  return (
    <div className="App">
      <CustomLayout>
          <ArticleListView />
      </CustomLayout>
    </div>
  );
}

export default App;
