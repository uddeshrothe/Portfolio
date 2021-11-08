import "./intro.scss";

function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
          <div className="imgContainer">
              <img src="assets/profile.jpg" alt="" />
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
              <h2>Hi there, I'm</h2>
              <h1>Uddesh Rothe</h1>
              <h3><span>Fullstack</span> Developer</h3>
          </div>
      </div>
    </div>
  );
}

export default intro;
