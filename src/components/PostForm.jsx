import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postAction";

 class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    // Call  Action
    this.props.createPost(post);
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title : </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body : </label>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn" value={body}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.prototypes = {
  createPost : PropTypes.func.isRequired
}

export default connect(null, { createPost } )(PostForm);