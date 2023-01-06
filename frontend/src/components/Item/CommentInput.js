import React from "react";
import { useState } from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

const CommentInput = (props) => {
  const [body, setBody] = useState("");

  const onUpdate = (e) => {
    setBody(ev.target.value);
  }

  const createComment = async (ev) => {
    ev.preventDefault();
    agent.Comments.create(this.props.slug, body).then((payload) => {
      props.onSubmit(payload);
    });
    setBody("");
  };


  return (
    <form className="card comment-form m-2" onSubmit={this.createComment}>
      <div className="card-block">
        <textarea
          className="form-control"
          placeholder="Write a comment..."
          value={this.state.body}
          onChange={this.setBody}
          rows="3"
        ></textarea>
      </div>
      <div className="card-footer">
        <img
          src={this.props.currentUser.image}
          className="user-pic mr-2"
          alt={this.props.currentUser.username}
        />
        <button className="btn btn-sm btn-primary" type="submit">
          Post Comment
        </button>
      </div>
    </form>
  );
}


export default CommentInput;
