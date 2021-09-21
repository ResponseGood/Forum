import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    axios({method: 'post',url:'http://127.0.0.1:8000/auth/token/login/', headers: {}, data: {username:this.state.username, password:this.state.password}})
    .then(res => {
      let token = res.data
      console.log(token.auth_token)
      console.log(res.headers);
      axios.defaults.headers.common['Authorization'] = `Token ${token.auth_token}`;
      console.log(res.headers);
    })
    .catch(err => {
      console.log(err)
    })
  }
  usernameHandler = (event) => {
    this.setState({username: event.target.value});
  }
  passwordHandler = (event) => {
    this.setState({password: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <label className="title-lgn">Вход</label>
        <input type='text' onChange={this.usernameHandler} placeholder='Логин' className='login-input'/>
        <input type='password' onChange={this.passwordHandler} placeholder='Пароль' className='password-input'/>
        <label className="acc-registration">У меня нет аккаунта</label>
        <input type='submit' className='btn-login' value='ок'/>
      </form>
    );
  }
}
export default LoginForm; 