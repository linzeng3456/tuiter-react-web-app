import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";
function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async () => {
    try {
      const _id = (new Date()).getTime();
      await dispatch(registerThunk({username, password, _id}));
      setUsername("");
      setPassword("");
      navigate("/tuiter/login");

    } catch (e) {
      setUsername("");
      setPassword("");
      alert(e);
    }
  };
  return (
      <div>
        <h1>Register Screen</h1>
        <div className="mt-2">
          <label>Username</label>
          <input className="form-control" type="text" value={username} placeholder="username"
                 onChange={(event) => setUsername(event.target.value)}/>
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input className="form-control" type="password" value={password} placeholder="password"
                 onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <button className="btn btn-primary mt-2"
                onClick={handleRegister}>
          Register
        </button>
      </div>
  );
}
export default RegisterScreen;