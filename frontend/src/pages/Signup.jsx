import React, { useState } from "react";
import { Link } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("Please fill all the details");
    }
    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
     
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
        setSignupInfo({
          name: "",
          email: "",
          password: "",
        });
        // validation error check
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
        // succes:false case from backend
      }else if(!success){
        handleError(message)
      }
      // console.log(result);
    //  normal catch error from server
    } catch (error) {
      handleError(error);
    }
   
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={signupInfo.name}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name..."
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={signupInfo.email}
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
            value={signupInfo.password}
            type="password"
            name="password"
            autoFocus
            placeholder="Enter your password..."
          />
        </div>
        <button type="submit">Signup</button>
        <span>
          Already have an account?
          <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
