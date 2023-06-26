// import posts from "../../../../server/models/posts.mjs";
import Post from "../../components/post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} key={post._id} />;
      })}
    </div>
  );
};

export default Posts;
