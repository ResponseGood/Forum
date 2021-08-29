import React from 'react';

export default function Header () {
    return (
        <div>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width"></meta>
            <div className="navigation">
                <nav>
                    <ul>
                        <li><a href='main'>UseRoot</a></li>
                        <li><a href='rules'>Правила</a></li>
                        <li><a href='main'>Темы</a></li>
                        <li><a href='chat'>Чат</a></li>
                        <li><a href='login' className='log-in'>Войти</a></li>
                        <li><a href='search' className='search'>Поиск</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}