import React from 'react';

let get_news = () => {
    ajax().get('127.0.0.1:8000/api/v1/get_all_users').then(function (response, xhr) {
        for (;;) {
            <p>response</p>
    }
})
}




export default function News () {
    return (
        <div className='news-loaded'>
            get_news
        </div>
    );
}
