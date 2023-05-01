import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <section className="header-title">
        <span className="header-title-small">React & Node</span>
        <span className="header-title-big">Blog</span>
      </section>
      <img src="images/fine-babe.jpg" alt="" className="header-img" />
    </section>
  );
};

export default Header;
