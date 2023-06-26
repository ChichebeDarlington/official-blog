import "./navbar.css";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FiInstagram,
  BsFillSearchHeartFill,
} from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../../context/Context";
import { useContext } from "react";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="navbar icons">
      <section className="left">
        <FaFacebookSquare className="icon" />
        <FaTwitterSquare className="icon" />
        <FaWhatsapp className="icon" />
        <FiInstagram className="icon" />
      </section>
      <section className="center">
        <ul className="list">
          <li className="list-item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="list-item">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
        </ul>
      </section>
      <section className="right">
        <img src={user?.profilePicture} alt="profile-img" className="nav-img" />
        <span>
          <BsFillSearchHeartFill className="seearch-icon" />
        </span>

        <ul className="list signature">
          {!user ? (
            <>
              <li className="list-item list-item-signature">
                <Link className="link" to="signup">
                  Signup
                </Link>
              </li>
              <li className="list-item list-item-signature">
                <Link className="link" to="login">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li
              className="list-item list-item-signature"
              onClick={handleLogout}
            >
              <Link className="link">Logout</Link>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
