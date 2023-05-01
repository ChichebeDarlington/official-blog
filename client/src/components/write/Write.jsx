import "./write.css";
import { AiFillFileAdd } from "react-icons/all";
const Write = () => {
  return (
    <div className="write">
      <img src="/images/post.jpg" alt="" className="write-img" />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <AiFillFileAdd className="write-icon" />
          </label>
          <input type="file" id="file-input" hidden />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your akuko"
            type="text"
            className="write-text write-input"
          ></textarea>
        </div>
        <button className="btn write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
