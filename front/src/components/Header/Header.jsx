import React, {useState, useEffect} from 'react';
import axios from 'axios';
import News from '../News/News';
import LoginForm from '../LoginForm/LoginForm';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function Header (props) {
    const [user, setUser] = useState({})
    let isLoggedIn = false;
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/auth/users/me/')
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
                return <img key={user.id} className='avatar' src='http://127.0.0.1:8000/media/C%3A/Users/cewim/Desktop/GitHub/Forum/backend/useroot/media/default.png'></img>
            } else {
                return <img key={user.id} className='avatar' src={user.avatar}></img>
            }
      } else {
          return <li key={user.id} className='log-in'><Link to="/login">Войти</Link></li>
      }
    }
    return (
        <div>
            <Router>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width"></meta>
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
                    <Route path="/rules">
                        <Rules />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/chat">
                        <Chat />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

function Home() {
    return <News />;
}
function Rules() {
    return <h2>Rules</h2>
}
function Login() {
    return <LoginForm />

}
function Search() {
    return <h2>Search</h2>

}
function Chat() {
    return <h2>Chat</h2>
}