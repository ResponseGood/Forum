import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import axios from 'axios';

export default function News () {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get_all_posts/')
        .then(res => {
            setPosts(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {posts.map(post => (
                <p key={post.id} className="post">{post.title}</p>
            ))}
        </div>
    );
}