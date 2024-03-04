import React, { useState } from "react";
import "./style.css";
import logo1 from "../../Assect/logo1.png";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);
  console.log(password);
  const navigate = useNavigate();
  function signUpWithEmail() { 
    if (email === "test@gmail.com" && password === "123456") {
        navigate("/home"); 
    } else {
        alert("Invalid credentials")
    }
}

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo1} alt="My Image" />
      </div>

      <p className="heading">welcome</p>

      <div className="input-container-login">
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="btn-container">
        <button className="btn" onClick={signUpWithEmail}>
          Log in
        </button>
      </div>
      <p className="heading">Forgot Password ?</p>
    </div>
  );
};

export default LoginPage;
