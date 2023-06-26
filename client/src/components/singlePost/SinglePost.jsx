import "./Singlepost.css";
import { BiEdit, RiDeleteBinFill } from "react-icons/all";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
  // const location = useLocation();
  // const path = location.pathname.split("/")[2];
  const { postId } = useParams();
  // console.log(postId);
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/posts/get-single-post/${postId}`
      );
      setPost(data);
    };
    getPost();
  }, [postId]);

  // console.log(post);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {/* show photo is photo exist  */}
        <img src="/images/post.jpg" alt="" className="single-post-img" />
        <h1 className="single-post-title">{post.title}</h1>
        <div className="single-post-crud">
          <BiEdit className="single-post-icon edit" />
          <RiDeleteBinFill className="single-post-icon delete" />
        </div>
        <div className="single-post-info">
          <span className="single-post-author">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="single-post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="single-post-description">{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
