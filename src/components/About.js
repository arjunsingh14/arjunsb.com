const About = () => {
  return (
    <div
      className="container fill-screen-height bg-gray-900 text-light m-top-10 mx-auto my-5"
      id="about"
    >
      <div className="row">
        <div className="col-sm-5 d-flex justify-content-center pt-5 pb-5">
          <img
            id="self"
            src="./me.jpg"
            className="img-thumbnail h-100"
            alt="me"
          />
        </div>
        <div className="col-sm-6 p-4 font-monospace">
          <h2
            style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
          >
            About me
          </h2>
          <p className="pt-4">
            <strong id="first-name">Hi, my name is Arjun.</strong> I'm a third year
             year Computer Science undergraduate QA Analyst Intern @ theScore living in
            Toronto.
          </p>
          <p>
            During my free time, you can catch me at the gym. Weightlifting
            helps me stay fit and motivated, while coding allows me to be
            creative and solve problems. When the lake isn't frozen, I love
            kayaking to relax and enjoy nature.
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
            <a href="https://drive.google.com/file/d/1Js-zMfcgukaHPw2rGSr3jw8Ko9XYwcXn/view?usp=sharing">
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
