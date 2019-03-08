import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Replies extends Component {
  render() {
    const { tweets } = this.props;

    return (
      <div className="column">
        <h1 className="title">Replies</h1>
        <ul>
          {tweets.map(tweet => (
            <li key={tweet.id}>
              <Link to={`${tweet.id}`}>
                <Tweet tweetId={tweet.id} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }, { tweetId }) {
  return {
    tweets: Object.keys(tweets)
      .map(id => ({ ...tweets[id] }))
      .filter(tweet => tweet.replyTo === tweetId)
      .sort((a, b) => b.timestamp - a.timestamp)
  };
}

export default connect(mapStateToProps)(Replies);
