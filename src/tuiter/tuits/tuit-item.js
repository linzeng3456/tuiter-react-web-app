import React from "react";
import TuitStats from "./tuit-stats"

import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "5h",
        "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img width={50} className="float-end rounded-circle" src={require(`../images/${tuit.image}`)} alt={""}/>
          </div>
          <div className="col-10">
            <div>
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>
              <span className="fw-bolder">{tuit.topic} </span>
              <i className="bi bi-check-circle-fill text-primary"></i>
              <span> @{tuit.userName} . {tuit.time}</span>
            </div>
            <div>{tuit.tuit}</div>
            <TuitStats replies={tuit.replies} retuits={tuit.retuits} likes={tuit.likes} />
          </div>

        </div>
      </li>
  );
};
export default TuitItem;