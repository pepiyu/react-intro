
function Post(props) {
    const {post} = props
    let commentsHtml = ''

    post.comments.forEach(comment =>{
        commentsHtml += `<p><b>${post.user}</b>
        ${comment}</p>`
    })

    return(

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
            <img src={post.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-muted">{post.time}</p>
                    <a className="btn" name="likes"><i className="fas fa-heart" style={{textAlign: 'right'}}></i> {post.likes} likes</a>
                    
                    </div>
                    <p className="card-text fw-bold">{post.user}</p>
                    <p className="card-text">{post.description}</p>
                    <a className="text-muted" name="comments"><i className="fas fa-comments"></i> comments({post.comments.length})</a>
                    <div name="comment-block" className="my-2">
                        <div name="comments-list" className="my-2" dangerouslySetInnerHTML={{__html: commentsHtml}} >

                        </div>
                        <div name="comment-text-area" className="my-2">
                            <textarea className="form-control my-1; width: 100%;" name="commentArea" cols="30" rows="3"></textarea>
                            <div className="d-flex my-2" 
                            style={{justifyContent: 'flex-end'}}
                            >
                                <a className="btn" name="replies" 
                                style={{justifyContent: 'flex-end'}}
                                >Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post