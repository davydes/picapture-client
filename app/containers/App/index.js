/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { loginRequest } from '../../actions';

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    onLogin: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <NavBar onLogin={this.props.onLogin} />
        <div className="container" >
          {React.Children.toArray(this.props.children)}
        </div>
        <Footer />
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLogin: () => dispatch(loginRequest({ username: 'testuser', password: 'test pass' })),
  };
}

export default connect(null, mapDispatchToProps)(App);
