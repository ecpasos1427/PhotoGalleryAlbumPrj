import React from "react";

class WelcomeView extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Digital Asset Manager</h1>
        <h2>Welcome!</h2>
        <br />
        <p>
          Thank you for visiting this website. Baking and construction is still
          ongoing but we hope to serve you soon!
        </p>
      </div>
    );
  }
}

export default WelcomeView;
