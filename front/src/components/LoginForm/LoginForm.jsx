import React from 'react';
import Button from '../ButtonLogin/ButtonLogin';

let LoginHandler = () => {
  console.log(1)
}

function Login() {
    return (
      <div>
        <form>
            <label>Войти</label>
            <input type="text" id="username" placeholder="Логин"/>
            <input type="text" id="password" placeholder="Пароль"/>
            <Button text='ок' type="submit" handler={LoginHandler()}/>
        </form> 
      </div>
    );
  }
  
  export default Login;