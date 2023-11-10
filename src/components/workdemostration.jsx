import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Workdemostration = () => {
  return (
      <>
      <h3 className="text-center my-4">Work Demostration</h3>
    <Container
      fluid
      style={{
        minHeight: "30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col md={6} style={{ position: "relative", overflow: "hidden" }}>
          <div className="video-wrapper">
            <video
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            >
              <source src="/Facebook.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Col>

        <Col
          md={6}
          style={{
            backgroundColor: "#f4f4f4",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {/* Right side - Links */}
          <div className="links-wrapper">
            <h3 className="h4 text-dark mb-4">Explore More</h3>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100088415133332&mibextid=2JQ9oc"
                  className="text-primary text-decoration-none"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/bcZBedjJjW0"
                  className="text-primary text-decoration-none"
                >
                  Link 1
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/foJICJJVq1g?si=u5zBTZfZRP810HfM"
                  className="text-primary text-decoration-none"
                >
                  Link 2
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/AJlvlbPIMdE?si=uKqxI-uotFRh11ve"
                  className="text-primary text-decoration-none"
                >
                  Link 3
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/tCEhneLY9rU?si=eG9_zrMM-qTCKhi6"
                  className="text-primary text-decoration-none"
                >
                  Link 4
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
      </>
  );
};

export default Workdemostration;
