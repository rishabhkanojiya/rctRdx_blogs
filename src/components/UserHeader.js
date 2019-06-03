import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <h5>{user.name}</h5>
      </div>
    );
  }
}

const mapPropsToState = (state, ownProps) => {
  //ownProps is used so that we can use the "this.props." inside mapprop func
  //ownProps.userId = this.props.userId
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapPropsToState,
  { fetchUser }
)(UserHeader);
