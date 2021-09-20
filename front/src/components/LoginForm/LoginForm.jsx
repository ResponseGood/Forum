import React, { useState } from 'react';
import axios from 'axios';
import Button from '../ButtonLogin/ButtonLogin';

function Login() {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});
  let LoginHandler = () => {
    let res = axios({method: 'post',url:'http://127.0.0.1:8000/auth/token/login/', headers: {}, data: {username:setUsername, password:setPassword}});
    console.log(1);
  }
  return (
    <div>
      <form>
        <label>Войти</label>
        <input value={username} onInput={e => setUsername(e.target.value)} type="text" id="username" placeholder="Логин"/>
        <input value={password} onInput={e => setPassword(e.target.value)} type="text" id="password" placeholder="Пароль"/>
        <Button text='ок' type="submit" handler={LoginHandler}/>
      </form> 
    </div>
    );
  }
  
export default Login;