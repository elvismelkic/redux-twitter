import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Timeline extends Component {
  render() {
    const { tweetIds } = this.props;

    return (
      <div className="column">
        <h1 className="title">Your Timeline</h1>
        <ul>
          {tweetIds.map(id => (
            <li key={id}>
              <Link to={`tweet/${id}`}>
                <Tweet tweetId={id} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Timeline);
