import react from "react";

function Comment({ user, comment }) {

    console.log(user)

    
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comment;