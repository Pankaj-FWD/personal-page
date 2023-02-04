import React from "react";
import ProfileImage from "./ProfileImage";
import { Container, Row, Col } from "reactstrap";
import ProfileDetails from "./ProfileDetails";
import { Name } from "../Constants";
class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Row>
          <Col>
            <ProfileImage />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="name"> {Name} </h1>
            <h4 className="name">Full stack developer (MERN)</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileDetails />
            <div class="footer-icons">
              <a href="#" className="socialicon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="socialicon">
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="socialicon"
                href="https://www.linkedin.com/in/pankaj-fwd/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" className="socialicon">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
