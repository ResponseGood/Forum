import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import React from "react";


export default function RegistrationForm () {
    const {
      register,
      formState: { errors },
      handleSubmit
    } = useForm({
      mode: "onChange"
    });
    const history = useHistory();
    const onSubmit = (data) => {
        axios({method: 'post',url:'http://127.0.0.1:8000/api/register/', headers: {}, data: {email: data.email, password: data.password, username:data.username}})
        .then(res => {
          history.push('/active');
        })
        .catch(err => {
          console.log(err);
        })
    };
  
    return (
        <div className="form_wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                placeholder="Никнейм"
                {...register("username", {
                    required: "Это обязательное поле",
                    maxLength: {
                        value: 15,
                        message: "Максимум 15 символов"
                    },
                    minLength: {
                        value: 3,
                        message: "Минимум 3 символа"
                    }
                })}
                />
                {errors.username && <p>{errors.username.message}</p>}
                <input
                placeholder="Email"
                {...register("email", {
                    required: "Это обязательное поле",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Невалидный email',
                    },
                })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                placeholder="Пароль"
                type="password"
                {...register("password", {
                    required: "Это обязательное поле",
                    minLength: {
                        value: 8,
                        message: "Минимум 8 символов"
                    }
                })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" value="ок" />
            </form>
        </div>
    );
}
