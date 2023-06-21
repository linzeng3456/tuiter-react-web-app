import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

// const TuitStats = ({ replies, retuits, likes }) => {
const TuitStats = ({ tuit }) => {
  const [isLiked, setIsLiked] = useState(true);
  // const [likesCount, setLikesCount] = useState(tuit.likes);
  const dispatch = useDispatch();

  const handleLike = () => {
    if (isLiked) {
      // setLikesCount(likesCount - 1);
      console.log("-----handleLike-----")
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1 }));
    } else {
      // setLikesCount(likesCount + 1);
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }));
    }
    setIsLiked(!isLiked);
  };
  return(
        <div className="row">
          <div className="col-3">
            <span className="mr-1">
              <i className="bi bi-chat-left"></i>
            </span>
            <span> {tuit.replies}</span>
          </div>
          <div className="col-3">
            <span className="mr-1">
              <i className="bi bi-arrow-repeat"></i>
            </span>
            <span> {tuit.retuits}</span>
          </div>
          <div className="col-3">
            <span
                className={isLiked ? 'text-danger mr-1' : 'mr-1'}
                onClick={handleLike}
                style={{ cursor: 'pointer' }}
            >
              <i className={isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
            </span>
            {/*<span> {likesCount}</span>*/}
            <span> {tuit.likes}</span>

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