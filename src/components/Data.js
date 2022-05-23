import react, { useState } from "react";

function Data({ video, handleToggle, commentsShown }) { 

    let {upvotes, downvotes} = video

    const [liveUpvotes, setUpvotes] = useState(upvotes)
    const [liveDownvotes, setDownvotes] = useState(downvotes)

    function handleUpVote() {
        setUpvotes(liveUpvotes + 1)
    }

    function handleDownVote() {
        setDownvotes(liveDownvotes + 1)
    }

    
    return (
        <div>
            <h2>{video.title}</h2>
            <span><div>{video.views} Views | Uploaded {video.createdAt}</div></span>
            <button onClick={handleUpVote}>{liveUpvotes}👍</button>
            <button onClick={handleDownVote}>{liveDownvotes}👎</button><br />
            <p></p>
            <button onClick={handleToggle}>
               {commentsShown ? 'Hide comments' : "Show comments"}
            </button>
            <hr></hr>
        </div>
    )
}

export default Data;