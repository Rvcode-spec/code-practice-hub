import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Image imports
import CardimgHtml from "./img/HTML.png";
import CardimgCss from "./img/CSS.svg";
import CardimgJs from "./img/JS.png"; // Add your own images
import Textlogo from "./img/code.svg";

const statsData = [
  {
    number: "15Million+",
    label: "Happy Students",
    bgColor: "bg-warning-subtle",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png" // Optional image
  },
  {
    number: "24000+",
    label: "Mock Tests",
    bgColor: "bg-danger-subtle",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  },
  {
    number: "14000+",
    label: "Video Lectures",
    bgColor: "bg-info-subtle",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  },
  {
    number: "80000+",
    label: "Practice Papers",
    bgColor: "bg-primary-subtle",
    image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  },
];

export default function Home() {
  return (
    <div>


<div className="container-fluid main-color " >
      <div className="row">
        {/* Text Content */}
        <div className="col-md-6">
          <h4><strong>CodeSarthi</strong></h4>
          <p>⭐ 4.6 | 654+ Students</p>
          <p>
            Katalon is a modern, comprehensive quality management platform that helps teams
            of any size deliver the highest quality digital experiences. It is a free test
            automation platform that can be used to automate online, mobile, and API testing.
            Built on top of the main libraries of Selenium and Appium. It includes a
            user-friendly interface that allows users to easily develop, run, and maintain tests.
          </p>

          {/* <div className="d-flex flex-wrap gap-4 mb-3">
            <div>📅 <strong>Duration:</strong> 45 days</div>
            <div>👨‍🎓 <strong>Students Enrolled:</strong> 654+ Students</div>
            <div>🧑‍💻 <strong>Course Type:</strong> Online / Offline</div>
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-dark">Enroll Now</button>
            <button className="btn btn-outline-dark">Get a Free Demo</button>
          </div> */}
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <img
            src={Textlogo} // your image path
            alt="Katalon Course"
            className="img-fluid image-area image-area::after"
           
          />
        </div>
      </div>
    </div>



{/* images  */}
      <Container fluid className="image-container p-5 bg-black">
        <Row className="h-50">
          <Col>
          <img src="" alt="" />
          </Col>
        </Row>
      </Container>

{/*  Trusted by Students */} 
      <div className="container py-5">
        <h1 className="text-center">A Platform Trusted by Students</h1>
        <div className="row g-6 mt-5 justify-content-center">

          {statsData.map((stat, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <div className={`p-4 rounded-4 text-center ${stat.bgColor}`}>
                <h2 className="fw-bold">{stat.number}</h2>
                <p className="text-muted">{stat.label}</p>
                {stat.image && (
                  <img src={stat.image} alt="icon" style={{ width: "50px", marginTop: "10px" }} />
                )}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/*  Our Courses */}
      <Container>
        <Row>
          <Col className="text-center col-12 py-4">
            <h1>Our Courses</h1>
          </Col>
        </Row>

        <Row className="g-4 ">
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                alt=""
                src={CardimgHtml}
                className="Cardimg "
              />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>
                  HTML (HyperText Markup Language) is the standard language used
                  to create and structure web pages on the internet.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgCss}
                className="Cardimg mt-2 rounded-left "
              />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>
                  CSS styles HTML elements, controls layout, colors, fonts,
                  spacing, and enhances website appearance and design.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgJs}
                className="Cardimg rounded-circle mt-2"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  JavaScript is a powerful programming language used to create
                  dynamic and interactive web applications.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgJs}
                className="Cardimg rounded-circle mt-2"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  JavaScript is a powerful programming language used to create
                  dynamic and interactive web applications.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgJs}
                className="Cardimg rounded-circle mt-2"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  JavaScript is a powerful programming language used to create
                  dynamic and interactive web applications.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgJs}
                className="Cardimg rounded-circle mt-2"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  JavaScript is a powerful programming language used to create
                  dynamic and interactive web applications.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgJs}
                className="Cardimg rounded-circle mt-2"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  JavaScript is a powerful programming language used to create
                  dynamic and interactive web applications.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={CardimgJs}
                className="Cardimg rounded-circle mt-2"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  JavaScript is a powerful programming language used to create
                  dynamic and interactive web applications.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "30vh" }}
        >
          <Button className="d-flex align-items-center justify-content-center h-40 w-40 fs-4  Button">
            Get Started
          </Button>
        </div>
      </Container>

    </div>
  );
}
