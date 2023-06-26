import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/signup",
        {
          username,
          email,
          password,
        }
      );
      data && window.location.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <span className="signup-title">Signup Form</span>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Input your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Input your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Input your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-btn">Signup</button>
      </form>
      <button type="submit" className="signup-login-btn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Signup;
