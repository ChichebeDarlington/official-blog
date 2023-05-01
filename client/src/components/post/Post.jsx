import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img src="/images/post.jpg" alt="" className="post-img" />
      <section className="post-info">
        <div className="post-cats">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">Post Title</span>
        <hr />
        <span className="post-date">2 months ago</span>
      </section>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ipsa?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        hic ex reprehenderit voluptatum labore saepe vero optio harum explicabo
        porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        dignissimos numquam harum perspiciatis aliquam vel exercitationem omnis
        provident nostrum dicta.
      </p>
    </div>
  );
};

export default Post;
