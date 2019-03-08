import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

class AddTweet extends Component {
  state = {
    content: "",
    replyTo: this.props.match.params.id ? this.props.match.params.id : null
  };

  handleChange = event => {
    const value = event.target.value;

    this.setState(() => ({
      content: value
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState(() => ({
      content: ""
    }));

    this.state.replyTo === null
      ? this.props.history.push("/")
      : this.props.history.push(`/tweet/${this.state.replyTo}`);

    this.props.dispatch(handleAddTweet(this.state));
  };

  isDisabled = () => {
    return this.state.content === "";
  };

  render() {
    return (
      <div className="column">
        <form className="form" onSubmit={this.handleSubmit}>
          <h1 className="title">Compose new Tweet</h1>
          <textarea
            className="tweet__input"
            placeholder="What's on your mind?"
            onChange={this.handleChange}
            value={this.state.content}
            maxLength="280"
          />
          <button className="tweet__submit" disabled={this.isDisabled()}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect()(AddTweet));
