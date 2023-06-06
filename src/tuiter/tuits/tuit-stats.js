import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const TuitStats = ({ replies, retuits, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };
  return(
        <div className="row">
          <div className="col-3">
            <span className="mr-1">
              <i className="bi bi-chat-left"></i>
            </span>
            <span> {replies}</span>
          </div>
          <div className="col-3">
            <span className="mr-1">
              <i className="bi bi-arrow-repeat"></i>
            </span>
            <span> {retuits}</span>
          </div>
          <div className="col-3">
            <span
                className={isLiked ? 'text-danger mr-1' : 'mr-1'}
                onClick={handleLike}
                style={{ cursor: 'pointer' }}
            >
              <i className={isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
            </span>
            <span> {likesCount}</span>
          </div>
          <div className="col-3">
            <span className="mr-1">
              <i className="bi bi-upload"></i>
            </span>
          </div>
        </div>
  );
};
export default TuitStats;