import React from 'react';
import News from '../News/News';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

export default function Header () {
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
                            <li className='log-in'><Link to="/login">Войти</Link></li>
                            <li className='search'><Link to="/search">Поиск</Link></li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route path="/rules">
                        <Rules />
                    </Route>
                    <Route path="/login">
                        <LoginForm />
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
function LoginForm() {
    return <h2>Login</h2>

}
function Search() {
    return <h2>Search</h2>

}
function Chat() {
    return <h2>Chat</h2>
}