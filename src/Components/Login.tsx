import React, { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

interface UserCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    
    const response = await fetch("/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    localStorage.setItem("email",credentials.email )
    navigate('/homepage');
    // document.location.href='';
    const data = await response.json();
    setCredentials(data.success);
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('/login', credentials);
  //     const data = response.data;
  //     if (data.success) {
  //       document.location.href="homepage.tsx";
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(credentials);
  };
  

  return (
    <>
    <div className="login-container" id="login">
      <form className="theme-form" onSubmit={handleSubmit}>
        <h3 className="form-text">Sign in to account</h3>
        <p className="form-text">Enter your email & password to login</p>
        <div className="form-group">
          <label className="form-text-row">Email Address</label>
          <input
            autoComplete="off"
            className="form-control"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required
            placeholder="Test@gmail.com"
          />
        </div>
        <div className="form-group">
          <label className="form-text-row">Password</label>
          <input
            autoComplete="off"
            className="form-control"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
            placeholder="********"
          />
        </div>
        <div className="form-group">
          <div className="checkbox">
            <input id="checkbox1" type="checkbox" />
            <label className="text-muted" htmlFor="checkbox1">
              Remember password
            </label>
            <a className="link" href="forget-password.html">
              Forgot password?
            </a>
          </div>
          <button className="signbtn" type="submit" onClick={handleLogin}>
            Sign in
          </button>
        </div>
        <div className="social-title">
          <h6>Or Sign in with </h6>
        </div>
        <div className="form-group">
          <ul className="social-icon">
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <SlSocialLinkedin className="social-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <TbBrandTwitter className="social-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <FiFacebook className="social-icons" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <AiOutlineInstagram className="social-icons" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <p className="row1">
            Don't have account?
            <a className="row2" href="">
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>

<Sidebar/>
</>
  );
};

export default Login;
