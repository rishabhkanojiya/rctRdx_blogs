import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <div className="media">
              <a className="d-flex align-self-center" href="#">
                <img
                  src=""
                  className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                  alt=""
                />
              </a>

              <div className="media-body">
                <h5>Media heading</h5>
                <p>Media text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchPost }
)(PostList);
