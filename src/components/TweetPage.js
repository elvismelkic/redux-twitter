import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import AddTweet from "./AddTweet";
import Replies from "./Replies";

class TweetPage extends Component {
  render() {
    return (
      <div className="column">
        <Tweet tweetId={this.props.match.params.id} />
        <AddTweet tweetId={this.props.history} />
        <Replies tweetId={this.props.match.params.id} />
      </div>
    );
  }
}

export default connect()(TweetPage);
