import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import Timeline from './Timeline';
import AddTweet from './AddTweet';
import TweetPage from './TweetPage';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading
            ? null
            : <div>
                <Route path='/' exact component={Timeline} />
                <Route path='/new' component={AddTweet} />
                <Route path='/tweet/:id' component={TweetPage} />
              </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    users,
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
