import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login Form</span>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Input your email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Input your password" />
        <button className="login-btn">Login</button>
      </form>
      <button className="login-signin-btn">
        <Link className="link" to="/signup">
          Signup
        </Link>
      </button>
    </div>
  );
};

export default Login;
