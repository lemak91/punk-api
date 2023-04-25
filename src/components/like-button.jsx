import React, { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState();
  return <button onClick={() => setLikes()}>{likes} ❤️ </button>;
}
export default LikeButton;
