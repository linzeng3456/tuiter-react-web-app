import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginScreen() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      await dispatch(loginThunk(user));
      navigate("/tuiter/profile");
    } catch (e) {
      alert(e);
    }
  };
  return (
      <div>
        <h1>Login Screen</h1>
        <div className="mt-2">
          <label>Username</label>
          <input className="form-control" type="text" value={user.username} placeholder="username"
                 onChange={(event) => setUser({...user, username: event.target.value})}/>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input className="form-control" type="password" value={user.password} placeholder="password"
                 onChange={(event) => setUser({...user, password: event.target.value})}/>
        </div>
        <button className="btn btn-primary mt-2"
                onClick={handleLogin}>
          Login
        </button>
      </div>
  );
}
export default LoginScreen;