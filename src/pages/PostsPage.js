import React, {useEffect, useState} from 'react';
import axios from "axios";

function PostsPage(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get("https://dummyjson.com/posts")
                .then(resp => setPosts(resp.data.posts))
        }
        getPosts()
    }, [])

    return (
        <div>
            {posts && posts.map(post => <div className="post_body">
                <h2 className="title">{post.title} id: {post.id}</h2>
                <p className="body">{post.body}</p>
            </div>)}
        </div>
    );
}

export default PostsPage;