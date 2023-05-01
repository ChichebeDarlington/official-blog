import "./sidebar.css";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FiInstagram,
} from "react-icons/all";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <section className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img src="/images/handsome-guy.jpg" alt="" className="sidebar-img" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
          corrupti et quos dolorem corporis quia illum ipsa sunt, eligendi
        </p>
      </section>

      <section className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Stles</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Cinema</li>
          <li className="sidebar-list-item">Tech</li>
        </ul>
      </section>

      <section className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>
        <section className="sidebar-icons">
          <FaFacebookSquare className="sidebar-icon" />
          <FaTwitterSquare className="sidebar-icon" />
          <FaWhatsapp className="sidebar-icon" />
          <FiInstagram className="sidebar-icon" />
        </section>
      </section>
    </div>
  );
};

export default Sidebar;
