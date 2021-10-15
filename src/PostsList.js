import Post from './Post.js'


function PostsList(props) {

    const {posts, addLike, searchValue, filtered} = props

    console.log(searchValue);
    
            posts.filter(post => post.description.toLowerCase().includes(searchValue)).map((searchedPosts, index) => {
                console.log(searchedPosts);
                return(
                    <>
                <Post
                key={index}
                description={searchedPosts.description}
                time={searchedPosts.time}
                img={searchedPosts.img}
                likes={searchedPosts.likes}
                comments={searchedPosts.comments}
                addLike={addLike}
                id={searchedPosts.id}
                />
        </>
            )
            })}


/*     if (filtered == false) {
        return(
            <>
                {posts.map((post, index) => (
                    <Post
                    key={index}
                    description={post.description}
                    time={post.time}
                    img={post.img}
                    likes={post.likes}
                    comments={post.comments}
                    addLike={addLike}
                    id={post.id}
                    />
                ))}

            
            </>
        )

    } else {



    } */

}

export default PostsList