import axios from 'axios';
import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
    this.mySubmitHandler = this.mySubmitHandler.bind(this)
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    axios({method: 'post',url:'http://127.0.0.1:8000/api/login/', headers: {}, data: {email: this.state.email, password: this.state.password}})
    .then(res => {
      console.log(res);
      event.target.reset();
      this.props.history.push('/');
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
      event.target.reset();
    })
  }
  emailHandler = (event) => {
    this.setState({email: event.target.value});
  }
  passwordHandler = (event) => {
    this.setState({password: event.target.value});
  }
  render() {
    return (
      <>
        <form onSubmit={this.mySubmitHandler} className="container-column">
          <label className="title-lgn">Вход</label>
          <input type='text' onChange={this.emailHandler} placeholder='Логин' className='login-input' required/>
          <input type='password' onChange={this.passwordHandler} placeholder='Пароль' className='password-input' required/>
          <label className="label-registration">У меня нет аккаунта</label>
          <input type='submit' className='btn-login' value='ок'/>
        </form>
      </>
    );
  }
}
export default LoginForm; 