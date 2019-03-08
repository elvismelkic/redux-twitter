import {
  _getUsers,
  _getTweets,
  _saveTweet,
  _saveToggleTweet
} from './_DATA.js';

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getTweets()
  ]).then(([users, tweets]) => ({
    users,
    tweets
  }));
}

export function saveTweet (tweet) {
  return _saveTweet(tweet);
}

export function saveToggleTweet ({ id, authedUser }) {
  return _saveToggleTweet({ id, authedUser });
}
