import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <span className="signup-title">Signup Form</span>
      <form className="signup-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Input your username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Input your email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Input your password"
        />
        <button className="signup-btn">Signup</button>
      </form>
      <button className="signup-login-btn">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Signup;
