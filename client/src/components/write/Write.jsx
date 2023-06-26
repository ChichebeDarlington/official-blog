import "./write.css";
import { AiFillFileAdd } from "react-icons/all";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  // console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.photo = fileName;
      try {
        const { image } = await axios.post("http://localhost:8000/api/upload", {
          data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/posts/post-create",
        newPost
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="post-image"
          className="write-img"
        />
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <AiFillFileAdd className="write-icon" />
          </label>
          <input
            type="file"
            id="file-input"
            onChange={(e) => setFile(e.target.files[0])}
            hidden
          />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell your akuko"
            type="text"
            className="write-text write-input"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="btn write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
