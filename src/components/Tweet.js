import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { calculateTime } from "../utils/helpers";
import { handleToggleTweet } from "../actions/tweets";

class Tweet extends Component {
  toggleTweet = () => {
    const { id, dispatch } = this.props;

    dispatch(handleToggleTweet(id));
  };

  render() {
    const {
      likes,
      replies,
      content,
      timestamp,
      name,
      avatarURL,
      likedByAuthedUser,
      parentTweet
    } = this.props;

    return (
      <div className="tweet">
        <img className="tweet__avatar" src={avatarURL} alt="author's avatar" />
        <div className="tweet__text">
          <span className="tweet__author">{name}</span>
          <span className="tweet__time">{calculateTime(timestamp)}</span>
          {parentTweet ? (
            <button
              className="tweet__button tweet__reply"
              onClick={event => {
                event.preventDefault();
                this.props.history.push(`/tweet/${parentTweet.id}`);
              }}
            >
              Replying to @{parentTweet.author}
            </button>
          ) : null}
          <p className="tweet__content">{content}</p>
          <div className="tweet__icons">
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              className="tweet__icon"
            >
              <g>
                <path d="m31.9 32.6c-2.7-4.2-6.1-5.5-10.2-5.8v2.4c0 0.9-0.4 1.7-1 2.3-1.3 1.3-3.5 1.3-4.7 0l-10.5-10.3c-0.3-0.3-0.5-0.8-0.5-1.2s0.2-0.9 0.5-1.2l10.5-10.3c1.2-1.3 3.4-1.3 4.7 0 0.6 0.6 1 1.4 1 2.3v2.9c7.7 1.5 13.3 8.3 13.3 16.3v1.7c0 0.7-0.5 1.4-1.2 1.6-0.1 0-0.3 0-0.5 0-0.5 0-1-0.2-1.4-0.7z m-11.9-9.2c3.7 0 7.8 0.6 11.3 3.5-1.3-5.4-5.8-9.5-11.5-10.1-0.8-0.1-1.5-0.1-1.5-0.1v-5.9l-9.3 9.2 9.3 9.2v-5.9s1.3 0.1 1.7 0.1z" />
              </g>
            </svg>
            <span className="tweet__number">{replies.length || null}</span>
            <button
              className="tweet__button"
              onClick={event => {
                event.preventDefault();
                this.toggleTweet();
              }}
            >
              {!likedByAuthedUser ? (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  viewBox="0 0 40 40"
                  className="tweet__icon"
                >
                  <g>
                    <path d="m20 33.3c-0.3 0-0.7-0.1-0.9-0.3-0.4-0.2-9.2-6.2-11.9-8.9-3.1-3.1-3.4-6.3-3.4-8.5 0-4.9 4-8.9 8.9-8.9 3 0 5.7 1.5 7.3 3.7 1.6-2.2 4.3-3.7 7.3-3.7 4.9 0 9 4 9 8.9 0 2.2-0.4 5.4-3.5 8.5-2.7 2.7-11.5 8.7-11.9 8.9-0.2 0.2-0.6 0.3-0.9 0.3z m-7.3-23.3c-3.1 0-5.6 2.5-5.6 5.6 0 1.8 0.3 4 2.4 6.1 2 2.1 8.2 6.3 10.5 7.9 2.4-1.6 8.5-5.8 10.5-7.9 2.1-2.1 2.4-4.3 2.4-6.1 0-3.1-2.5-5.6-5.6-5.6s-5.6 2.5-5.6 5.6c0 0.9-0.8 1.7-1.7 1.7s-1.7-0.8-1.7-1.7c0-3.1-2.5-5.6-5.6-5.6z" />
                  </g>
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1em"
                  width="1em"
                  viewBox="0 0 40 40"
                  className="tweet__icon--clicked"
                >
                  <g>
                    <path d="m3.7 15.7c0 2.1 0.3 5.5 3.3 8.5 2.7 2.6 11.5 8.6 11.8 9 0.4 0.1 0.7 0.3 1 0.3s0.7-0.2 1-0.3c0.4-0.4 9.2-6.2 11.9-9 3-3 3.3-6.4 3.3-8.5 0-5-4-9-9-9-2.7 0-5.3 1.5-7 3.8-1.7-2.3-4.3-3.8-7.3-3.8-4.9 0-9 4-9 9z" />
                  </g>
                </svg>
              )}
            </button>
            <span className="tweet__number">{likes.length || null}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ tweets, users, authedUser }, { tweetId }) {
  const tweet = tweets[tweetId];
  const author = users[tweet.author];
  const { id, likes, replies, content, timestamp, replyTo } = tweet;
  const { name, avatarURL } = author;

  return {
    id,
    likes,
    replies,
    content,
    timestamp,
    name,
    avatarURL,
    likedByAuthedUser: likes.includes(authedUser),
    parentTweet: !replyTo
      ? null
      : { author: tweets[replyTo].author, id: tweets[replyTo].id }
  };
}

export default withRouter(connect(mapStateToProps)(Tweet));
