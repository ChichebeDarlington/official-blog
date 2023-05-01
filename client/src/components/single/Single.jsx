import Sidebar from "../sidebar/Sidebar";
import SinglePost from "../singlePost/SinglePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
