/* @flow */
import * as React from 'react';
import { connect } from "react-redux";
import TextField from "./shared/textfield";
import {setCurrentUser} from "../actions/auth";

type Props = {
  setCurrentUser: Function
};

type State = {
  formData: {
    username: string,
    password: string
  }
};

class Login extends React.Component<Props, State> {
  
  state = {
    formData:{
      username:"",
      password:""
    }
  }

  setFormDate = (field,value) => {
    let updateFormData = this.state.formData;
    updateFormData[field] = value;
    this.setState({formData:updateFormData});
  }

  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setFormDate(name,value);
  }

  handleClick = (e) => {
    const {formData} = this.state;
    this.props.setCurrentUser(formData)
  };

  render() {
    const {formData} = this.state;
    return (
      <div>
        <TextField
          value={formData.username}
          onChange={this.onChange}
          name="username"
          type="text"
          placeholder="Enter your name"
          label="Name"
        />
        <TextField
          value={formData.password}
          onChange={this.onChange}
          type="password"
          name="password"
          placeholder="Enter your password"
          label="Password"
        />
        <button onClick={this.handleClick}>
          Login
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

export default connect(null, {setCurrentUser})(Login)
