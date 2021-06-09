import React from 'react';



export default function Header () {
    return (
        <div>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width"></meta>
            <div className="navigation">
                <nav>
                    <ul>
                        <li><a href='#'>UseRoot</a></li>
                        <li><a href='#'>Правила</a></li>
                        <li><a href='#'>Темы</a></li>
                        <li><a href='#'>Чат</a></li>
                        <li><a href='#' className='log-in'>Войти</a></li>
                        <li><a href='#' className='search'>Поиск</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
