import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "../../App.css";
function Register({ goToLogin }) {
  const [newUser, setNewUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  const sendWelcomeEmail = (email) => {
    // Send welcome email using email.js
    emailjs
      .send(
        'service_j1xkbjk', // Replace with your EmailJS service ID
        'template_2j8j6d5', // Replace with your EmailJS template ID for welcome email
        {
          user_email: email,
          // Include the welcome message in the email
        },
        '3s39O4CdpU_Je8HKd' // Replace with your EmailJS user ID
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
  const register = async () => {
    try {
      // Send new user info to server
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      };
      let results = await fetch("/api/register", options);
      if (results.ok) {
        // Send welcome email
        sendWelcomeEmail(newUser.userEmail);
        // Redirect user to login page
        navigate("/");
      } else {
        let error = await results.json(); // Get the error message from the server
        if (error.code === "ER_DUP_ENTRY") {
          setError("The username is already taken");
        } else {
          setError(error.message);
        }
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  return (
    <div className="register-form">
      <h3 className="page-header">Need to register?</h3>
      <input
        value={newUser.userName}
        onChange={handleChange}
        name="userName"
        type="text"
        placeholder="Your username"
      />
      <input
        value={newUser.userEmail}
        onChange={handleChange}
        name="userEmail"
        type="email"
        placeholder="Your email"
      />
      <input
        value={newUser.userPassword}
        onChange={handleChange}
        name="userPassword"
        type="password"
        placeholder="Your password"
      />
      <button className="home-button" onClick={register}>
        Register
      </button>
      <p>
        Have an account? <button onClick={goToLogin}>Log in</button>
      </p>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}
export default Register;