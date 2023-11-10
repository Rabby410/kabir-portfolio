import React from "react";

const Aboutme = () => {
  const aboutMeStyle = {
    backgroundColor: "#f8f9fa",
    padding: "80px 0",
  };

  const sectionHeadingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const contentStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  };

  return (
    <section style={aboutMeStyle} id="about">
      <div className="container">
        <h2 style={sectionHeadingStyle}>About Me</h2>
        <div style={contentStyle}>
          <p>
            Greetings! I'm Kabir Hossain Nayan, a passionate multimedia artist
            based in the vibrant city of Dhaka, Bangladesh. With a keen eye for
            detail and a love for storytelling, I specialize in a diverse range
            of creative services that bring visuals and sounds to life.
          </p>
          <section>
            <h3>Skills:</h3>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <div className="skill">
                    <p className="skill-name">Video Editing & Videography</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="skill">
                    <p className="skill-name">Sound Editing & Design</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="skill">
                    <p className="skill-name">Motion Graphics & Design</p>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
