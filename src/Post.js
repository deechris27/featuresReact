import React from 'react'

export const Post = ({posts, loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }

    return <div>
            <ul>
                {posts.map(post=>{
                return <li key={post.id}>
                    {post.title}
                </li>
                })}
            </ul>
        </div>;
};
