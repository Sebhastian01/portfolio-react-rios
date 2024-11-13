import React, { useState } from 'react';
import './LikesDislike.css'

export const LikesDislike = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className='Interaction'>
      <button onClick={handleLike}>Like {likes}</button>
      <button onClick={handleDislike}>Dislike {dislikes}</button>
    </div>
  );
}
