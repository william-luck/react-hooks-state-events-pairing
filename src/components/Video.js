import react from "react";

function Video({ video }) { 
    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
        </div>
    )
}

export default Video;