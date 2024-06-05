import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "../../App.css";

function Login({ goToRegister }) {
  const [credentials, setCredentials] = useState({
    userName: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const sendRecoveryPasswordEmail = (email) => {
    // Send recovery password email using email.js
    emailjs
      .send(
        'service_0t6098h',
        'template_2j8j6d5',
        {
          userEmail: email,
          // Include the recovery password message in the email
          message: "Forgot your password? Click the link to reset it.",
        },
        
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Optionally, display a success message to the user
        },
        (error) => {
          console.error("Email sending failed:", error);
          // Optionally, display an error message to the user
        }
      );
  };


  const login = async () => {
    try {
      // Simulated API call to the server
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        // Simulated response from server
        const data = await response.json();
        // Store token in localStorage
        localStorage.setItem("token", data.token);
        // Redirect user to HomePage
        navigate("/private");
      } else {
        setError("Invalid username or password");
        // Send recovery password email
        sendRecoveryPasswordEmail(credentials.userEmail);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleForgotPasswordClick = () => {
    setForgotPasswordClicked(true);
    // Here you can implement the logic to handle the forgot password functionality
  };


  const handleSetNewPassword = async () => {
    // Implement this function to handle setting a new password
  };
  

  return (
    <div className="register_form">
      <h3 className="page-header">Hello, please log in!</h3>
      <input
        value={credentials.userName}
        onChange={handleChange}
        name="userName"
        type="text"
        placeholder="Your username"
      />
      <input
        value={credentials.userPassword}
        onChange={handleChange}
        name="userPassword"
        type="password"
        placeholder="Your password"
      />
      <button className="home-button" onClick={login}>
        Log in
      </button>
      <p>
        Don't have an account? <button onClick={goToRegister}>Register</button>
      </p>
      <div>
        {error && <div className="text-danger">{error}</div>}
        {forgotPasswordClicked ? (
          <>
            <p>
              Forgot your password? Check your email for instructions.
            </p>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="Enter new password"
            />
            <button
              className="home-button"
              onClick={handleSetNewPassword}
            >
              Set New Password
            </button>
          </>
        ) : (
          <button
            className="home-button"
            onClick={handleForgotPasswordClick}
          >
            Forgot Password
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;