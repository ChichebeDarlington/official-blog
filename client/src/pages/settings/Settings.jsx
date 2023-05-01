import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { BiUserCircle } from "react-icons/all";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <small className="settings-title-update">Update Account</small>
          <small className="settings-title-delete">Delete Account</small>
        </div>
        <div className="settings-form">
          <label htmlFor="">Profile picture</label>
          <div className="settings-profile-picture">
            <img
              src="/images/adidas-shirt.jpg"
              alt=""
              className="settings-img"
            />
            <label htmlFor="file-input">
              <BiUserCircle className="settings-icon" />
            </label>
            <input type="file" id="file-input" hidden />
          </div>
          <label htmlFor="">UserName</label>
          <input type="text" placeholder="Mazi" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="mazi@gmail.dev" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="settings-btn">Update</button>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
