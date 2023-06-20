import React, {useEffect} from "react";
// import tuitsArray from './tuits.json';
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../services/tuits-thunks";

const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuits)
  console.log("------TuitList-----");
  console.log(tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [dispatch])

  return(
      <ul className="list-group">
        { loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          tuits.map(tuit => {
              return <TuitItem
                  key={tuit._id} tuit={tuit}/>
          })
        }
      </ul>
  );
};
export default TuitList;