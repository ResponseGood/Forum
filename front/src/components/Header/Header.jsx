import React, {useState, useEffect} from 'react';
import axios from 'axios';
import News from '../News/News';
import LoginForm from '..//LoginForm/LoginForm';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export default function Header (props) {
    const [user, setUser] = useState({})
    let isLoggedIn = false;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/me/')
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    if (user.username) {
        isLoggedIn = true
    }
    const isAuthAvatar = () => {
        if (isLoggedIn) {
            if (!user.avatar) {
                return <img key={user.id} className='avatar' src='http://127.0.0.1:8000/media/default.png'/>
            } else {
                return <img key={user.id} className='avatar' src={user.avatar}/>
            }
      } else {
          return <li key={user.id} className='log-in'><Link to="/login">Войти</Link></li>
      }
    }
    return (
        <>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width"/>
            <Router>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li><Link to="/">UseRoot</Link></li>
                            <li><Link to="/rules">Правила</Link></li>
                            <li><Link to="/">Темы</Link></li>
                            <li><Link to="/chat">Чат</Link></li>
                            <li>{isAuthAvatar()}</li>
                            <li className='search'><Link to="/search">Поиск</Link></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/" component={News}/>
                    <Route exact path="/rules" component={Rules}/>
                    <Route exact path="/login" component={LoginForm}/>
                    <Route exact path="/reg" component={RegistrationForm}/>
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/chat" component={Chat}/>
                    <Route exact path="/active" component={EmailActive}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </>
    );
}



function EmailActive () {
        <h2 className="email">Active your email!</h2>
}


function NotFound () {
    return (
        <div className="center_wrapper">
            <h2 className="title-error">Ошибка 404</h2>
            <br/>
            <p className="notfound">Страница не найдена!</p>
        </div>
    )

}

function Rules() {
    return <h2>Rules</h2>
}
function Search() {
    return <h2>Search</h2>

}
function Chat() {
    return <h2>Chat</h2>
}