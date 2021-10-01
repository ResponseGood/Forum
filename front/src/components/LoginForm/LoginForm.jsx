import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from 'react';

export default function LoginForm () {
  const {register, formState: { errors }, handleSubmit } = useForm({
    mode: "onChange"
  });
  const history = useHistory();
  const onSubmit = (data) => {
    axios({method: 'post',url:'http://127.0.0.1:8000/api/login/', headers: {}, data: {email: data.login, password: data.password}})
    .then(res => {
      history.push('/');
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
    })
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
        <label className="registration-label">У меня нет аккаунта</label>
        <input type="submit" value="ок" />
      </form>
    </div>
    );
}