import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Home = () => {
  let { search } = useLocation();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/posts/get-all-post" + search
      );
      setPosts(data);
    };
    fetchPost();
  }, [search]);

  return (
    <div>
      <Header />
      <section className="home">
        <Posts posts={posts} />
        <Sidebar />
      </section>
    </div>
  );
};

export default Home;
