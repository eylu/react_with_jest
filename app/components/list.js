/* @flow */
import * as React from 'react';
import { connect } from "react-redux";
import TextField from "./shared/textfield"
import {delCurrentUser} from "../actions/auth"

type Props = {
  auth: {
    id: number
  },
  delCurrentUser: Function
};

class List extends React.Component<Props> {

  handleClick = (e) => {
    const {id} = this.props.auth;
    this.props.delCurrentUser(id)
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Logout
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {delCurrentUser})(List)
