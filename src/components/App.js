import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import ButtonContainer from './ButtonContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonContainer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
