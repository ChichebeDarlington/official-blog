import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { user, dispatch, isFetching } = useContext(Context);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          password: passwordRef.current.value,
          email: emailRef.current.value,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });

      console.log(error);
    }
  };
  console.log(user);
  return (
    <div className="login">
      <span className="login-title">Login Form</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Input your email" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Input your password"
          ref={passwordRef}
        />
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
