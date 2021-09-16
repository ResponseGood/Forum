import React, {useState, useEffect} from 'react';
import axios from 'axios';
import News from '../News/News';
import LoginForm from '../LoginForm/LoginForm';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function Header (props) {
    const [user, setUser] = useState({})
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/auth/users/me')
        .then(res => {
            console.log(res.data)
            setUser(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    let isLoggedIn = false;
    if (user.username) {
        isLoggedIn = true;
    }

    const renderAuthButton = () => {
      if (isLoggedIn) {
        const avatar = user.avatar
        console.log(avatar)
        return <img key={user.id} className='log-in' src={avatar}><Link to="/profile"></Link></img>
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
                            {renderAuthButton()}
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