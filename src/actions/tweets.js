import { saveTweet, saveToggleTweet } from '../utils/api';
import { showLoading, hideLoading} from 'react-redux-loading';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const ADD_TWEET = 'ADD_TWEET';
export const TOGGLE_TWEET = 'TOGGLE_TWEET';

export function receiveTweets (tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function addTweet (tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleAddTweet (tweet) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return saveTweet({
      ...tweet,
      author: authedUser
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
      .catch(() => alert("There was an error. Try again."));
  };
}

function toggleTweet ({ id, authedUser }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser
  }
}

export function handleToggleTweet (id) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(toggleTweet({ id, authedUser }));
    return saveToggleTweet({ id, authedUser })
      .catch(() => {
        dispatch(toggleTweet({ id, authedUser }));
        alert("There was an error. Try again.");
      });
  }
}
