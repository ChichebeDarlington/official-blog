import "./sidebar.css";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FiInstagram,
} from "react-icons/all";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/category/fetch-category"
      );
      setCategory(data);
    };
    getCategory();
  }, []);

  // console.log(category);
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
          {category.map((cate, index) => {
            return (
              <Link to={`/?cat=${cate.name}`} className="link" key={index}>
                <li className="sidebar-list-item">{cate.name}</li>
              </Link>
            );
          })}
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
