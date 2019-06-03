import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div className="card border border-primary mb-3" key={post.id}>
          <div className="card-body">
            <div className="media">
              <a className="d-flex align-self-center">
                <img
                  src=""
                  className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                  alt=""
                />
              </a>

              <div className="media-body">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <UserHeader userId={post.userId} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);
