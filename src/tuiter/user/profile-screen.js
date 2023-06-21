import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk }
  from "../services/auth-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => {
    console.log("------state.user ------")
    console.log(state.user)
    if (!state.user) {
      console.trace()
    }
    console.trace()
    return state.user
  });
  console.log("------profile currentUser------")
  console.log(currentUser)
  const [ profile, setProfile ] = useState(currentUser);
  console.log("+++++++profile++++++++")
  console.log(profile)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async () => { await dispatch(updateUserThunk(profile)); };

  // useEffect( () => {
  //   const fetchProfile = async () => {
  //     try {
  //       const { payload } = await dispatch(profileThunk());
  //       console.log("+++++++useEffect profile++++++++")
  //       console.log(payload)
  //       setProfile(payload);
  //     } catch (error) {
  //       console.error(error);
  //       navigate("/tuiter/login");
  //     }
  //   }
  //   fetchProfile();
  // }, [dispatch,navigate]);
  return (
      <div>
        <h1>Profile Screen</h1>
        {profile && (<div>
              <div>
                <label>First Name</label>
                <input className="form-control" type="text" value={profile.firstName}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, firstName: event.target.value,
                         };
                         setProfile(newProfile);
                       }}/>
              </div>
              <div>
                <label>Last Name</label>
                <input className="form-control" type="text" value={profile.lastName}
                       onChange={(event) => {
                         const newProfile = {
                           ...profile, lastName: event.target.value,
                         };
                         setProfile(newProfile);
                       }}/>
              </div></div>
        )}
        <button className="btn btn-danger mt-1 mr-2"
            onClick={() => {
              dispatch(logoutThunk());
              navigate("/tuiter/login");
            }}>Logout</button>&nbsp;
        <button className="btn btn-success mt-1"  onClick={save}>Save </button>
      </div>
  );
}
export default ProfileScreen;