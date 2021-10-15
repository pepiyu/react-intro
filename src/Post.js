
import Comments from './Comments.js'
import React, { useState } from 'react'



function Post(props) {

    const {img, user, description, time, comments, likes, addLike, id, addComment, onChangeComment} = props


    const [newComment, saveNewComment] = useState({
        commentArea:'',
    })

    const onChange = e=>{
        saveNewComment({
            ...commentArea,
            [e.target.name]: e.target.value

        })

        
        onChangeComment(e.target.value)
    }


    const {commentArea} = newComment

    const onSubmit = e=>{
        e.preventDefault()

        if (e.target.value === ''){

        }

        addComment(id, commentArea)

        newComment.commentArea = ''

    }


    return(

        <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-muted">{time}</p>
                    <a className="btn" onClick={() => {addLike(id)}} name="likes"><i className="fas fa-heart" style={{textAlign: 'right'}}></i> {likes} likes</a>
                    {/* <a className="btn" onClick={() => {alert(id)}} name="likes"><i className="fas fa-heart" style={{textAlign: 'right'}}></i> {likes} likes</a> */}
                    
                    </div>
                    <p className="card-text fw-bold">{user}</p>
                    <p className="card-text">{description}</p>
                    <a className="text-muted" name="comments"><i className="fas fa-comments"></i> comments({comments.length})</a>
                    <div name="comment-block" className="my-2">
                        <div name="comments-list" className="my-2">


                        {comments.map((comment, index) =>
                            <Comments key={index} user={user} comment={comment}/>
                        )}

                        </div>
                        <div name="comment-text-area" className="my-2">

                            <form onSubmit={onSubmit}
>

                                <textarea className="form-control my-1; width: 100%;" value={commentArea} name="commentArea" cols="30" rows="3" onChange={onChange}></textarea>
                                <div className="d-flex my-2" 
                                style={{justifyContent: 'flex-end'}}
                                >
                                    <button type="submit" className="btn" name="replies"
                                    style={{justifyContent: 'flex-end'}}
                                    >Reply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post