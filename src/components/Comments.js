import react from "react";
import Comment from "./Comment";

function Comments({ videoData }) {

    const comments = videoData.comments

    console.log(comments)

    return (
        <div>
            <h2>Comments</h2>
            {comments.map(comment => <Comment user={comment.user} comment={comment.comment} />)}
            
        </div>
    )
}

export default Comments;