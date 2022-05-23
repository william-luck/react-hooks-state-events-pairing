import video from "../data/video.js";
import Video from "./Video.js";
import Data from "./Data.js";
import Comments from "./Comments.js";
import react, { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  const [commentsShown, setCommentsShown] = useState(true)

  function handleToggle() {
    setCommentsShown(!commentsShown)
    console.log("i have been communicated lmao")
  }

  return (
    <div>
      <Video />
      <Data video={video} handleToggle={handleToggle} commentsShown={commentsShown}/>
      {commentsShown ? <Comments videoData={video}/> : null}
    </div>
    
  );
}

export default App;
