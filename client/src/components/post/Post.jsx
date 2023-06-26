import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img src={post.photo} alt="" className="post-img" />}
      <section className="post-info">
        <div className="post-cats">
          {post.categories.map((category, index) => {
            return (
              <span className="post-category" key={index}>
                {category.name}
              </span>
            );
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          {new Date(post.createAt).toDateString()}
        </span>
      </section>
      <p className="post-description">{post.description}</p>
    </div>
  );
};

export default Post;
