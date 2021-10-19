import Post from './Post.js'


function PostsList(props) {

    const {posts, addLike, searchValue, addComment, onChangeComment} = props
    const filteredPost = searchValue === '' ? posts : posts.filter(post => post.description.toLowerCase().includes(searchValue))
    return(
    <>
        {filteredPost.map((searchedPosts, index) => 

            <Post
            key={index}
            description={searchedPosts.description}
            user={searchedPosts.user}
            time={searchedPosts.time}
            img={searchedPosts.img}
            likes={searchedPosts.likes}
            comments={searchedPosts.comments}
            addLike={addLike}
            addComment={addComment}
            onChangeComment={onChangeComment}
            id={searchedPosts.id}
            />

        )}
        </>
    )
        
}


export default PostsList