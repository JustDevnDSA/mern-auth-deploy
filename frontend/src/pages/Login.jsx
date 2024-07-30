import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Please fill all the details");
    }
    try {
      const url = "http://localhost:5000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, error, jwtToken, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        setLoginInfo({
          email: "",
          password: "",
        });
        // validation error check
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
        // succes:false case from backend
      } else if (!success) {
        handleError(message);
      }
      // console.log(result);
      //  normal catch error from server
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={loginInfo.email}
            type="email"
            name="email"
            autoFocus
            placeholder="Enter your email..."
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={loginInfo.password}
            type="password"
            name="password"
            autoFocus
            placeholder="Enter your password..."
          />
        </div>
        <button type="submit">Login</button>
        <span>
          Dont't have an account?
          <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
