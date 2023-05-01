import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        "http://localhost:6000/api/posts/get-all-post"
      );
      console.log(data);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <Header />
      <section className="home">
        <Posts />
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
