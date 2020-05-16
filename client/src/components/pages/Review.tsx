import React from "react";
import { Button, Container, Row, Col, Card } from "reactstrap";
import Rater from "react-rater";

export interface Review {
  navigation: any;
  formData: any;
}

const Review: React.SFC<Review> = ({ formData, navigation }) => {
  const { firstName, lastName, email, age, image, skills } = formData;
  const { go } = navigation;

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-4">
        <Col className="text-center" xs={5}>
          <h3 style={{ color: "white" }}>Review your data</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={5}>
          <Card className="text-center p-3 m-3">
            <h5 className="mb-3">Profile</h5>
            <h6>First name: {`${firstName}`}</h6>
            <h6>Last name: {`${lastName}`}</h6>
            <h6>Age: {`${age}`}</h6>
            <h6>Email: {`${email}`}</h6>
            <h6>Image: {`${image}`}</h6>
          </Card>

          <Card className="text-center p-3 m-3">
            <h5>Skills</h5>
            {skills &&
              skills.map((skill: any, i: any) => (
                <div>
                  <h6>{skill.skill}</h6>
                  <h6>
                    <Rater total={10} rating={skill.rating} />
                  </h6>
                </div>
              ))}
          </Card>

          <span className="text-center d-flex justify-content-center mt-3">
            <Button className=" m-2" onClick={() => go("submit")}>
              Submit
            </Button>
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
