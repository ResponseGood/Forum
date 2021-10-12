import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";

export default function LoginForm () {
  const {register, formState: { errors }, handleSubmit } = useForm({
    mode: "onChange"
  });
  const history = useHistory();
  const onSubmit = (data) => {
    axios({method: 'post',url:'http://127.0.0.1:8000/api/login/', headers: {}, data: {email: data.login.replace(/\s/g, ''), password: data.password.replace(/\s/g, '')}})
    .then(res => {
      history.push('/');
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
    })
  }
  const onClickRegistr = () => {
    history.push('/reg');
  }

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        placeholder="Логин"
        {...register("login", {
          required: "Это обязательное поле",
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Невалидный email',
          },
        })}
        />
        {errors.login && <p>{errors.login.message}</p>}
        <input
        placeholder="Пароль"
        {...register("password", {
          required: "Это обязательное поле"
        })}
        type="password"/>
        {errors.password && <p>{errors.password.message}</p>}
        <label className="registration-label" onClick={onClickRegistr}>У меня нет аккаунта</label>
        <input type="submit" value="ок" />
      </form>
    </div>
    );
}