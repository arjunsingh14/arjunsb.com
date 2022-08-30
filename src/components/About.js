const About = () => {
  return (
    <div
      className="container fill-screen-height bg-gray-900 text-light m-top-10 mx-auto my-5"
      id="about"
    >
      <div className="row">
        <div className="col-sm-6 d-flex justify-content-center pt-4 pb-5">
          <img id="self" src="./me.jpg" className="img-thumbnail" alt="me" />
        </div>
        <div className="col-sm-6 p-4 font-monospace">
          <h2
            style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
          >
            About me
          </h2>
          <p className="pt-4">
            <strong id="first-name">Hi, my name is Arjun.</strong> I'm an
            incoming second year Computer Science undergraduate living in
            Toronto.
          </p>
          <p>
            In my free time, I'll be hunting down cool places to eat at, working
            out, hanging out with friends, playing video games or dipping my
            toes into any creative outlet that interests me (right now it's
            Blender.)
          </p>
          <p>
            Feel free to take take a look at my work or get into{" "}
            <span>
              <a
                href="#footer"
                style={{ color: "#4dadfd", textUnderlineOffset: "3px" }}
              >
                contact with me.
              </a>
            </span>{" "}
          </p>
          <div className="row d-flex align-item-center">
            <a href="https://drive.google.com/file/d/1MhtObsBwhtgDRiLEmRWuSa17M9dhxyPE/view?usp=sharing">
              <button
                className="btn btn-primary"
                style={{
                  fontFamily: "monospace",
                  background: "#ffeded",
                  color: "black",
                }}
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
