import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function News () {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get_all_posts/')
        .then(res => {
            setPosts(res.data);
            setLoading(false);

        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {loading ? (
                <h2 className="loading">Загрузка...</h2>
            ):(
                posts.map(post => (
                    <p key={post.id} className="post">{post.title}</p>
                ))
            )}
        </div>
    );
}