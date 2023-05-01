import "./Singlepost.css";
import { BiEdit, RiDeleteBinFill } from "react-icons/all";

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img src="/images/post.jpg" alt="" className="single-post-img" />
        <h1 className="single-post-title">Single Post</h1>
        <div className="single-post-crud">
          <BiEdit className="single-post-icon edit" />
          <RiDeleteBinFill className="single-post-icon delete" />
        </div>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>MAzi</b>
          </span>
          <span className="single-post-date">2 months ago</span>
        </div>
        <p className="single-post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          tempora assumenda placeat consequuntur, dolore id obcaecati, quas aut
          quidem unde, eius eos architecto molestiae a vero? Expedita magni
          voluptates, incidunt distinctio voluptatem provident omnis nostrum
          laboriosam illum ipsam velit quas?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
