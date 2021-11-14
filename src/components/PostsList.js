import Post from './Post.js'
import { getPosts } from '../services/API.js'
import React, { useState, useEffect } from 'react';


function PostsList(props) {



    const {addLike, addComment, onChangeComment, search, posts, setPosts} = props
    
    const filteredPost = search === '' ? posts : posts.filter(post => post.text.toLowerCase().includes(search))
    console.log(search);
    return (
    <>

        {posts.length > 0 ?
            (
                <>
                {filteredPost.map((searchedPosts, index) => 

                <Post
                key={index}
                text={searchedPosts.text}
                author={searchedPosts.author.name}
                createdAt={searchedPosts.createdAt}
                image={searchedPosts.image}
                likes={searchedPosts.likes}
                comments={searchedPosts.comments}
                addLike={addLike}
                addComment={addComment}
                onChangeComment={onChangeComment}
                setPosts={setPosts}
                id={searchedPosts.id}
                />
                )}
                </>
                
            )  : 'Loading...'
            
            }
        
        </>
    )
        
}


export default PostsList