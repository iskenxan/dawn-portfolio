import React, { Component } from 'react';
import Routes from './routes';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <Routes {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return{
    loggedIn: state.session.loggedIn
  }
}

export default connect(mapStateToProps)(App);
