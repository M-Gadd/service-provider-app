import React, { useState, useEffect } from "react";
import "react-rater/lib/react-rater.css";
// import api from "../../api";
import {
  CustomInput,
  Input,
  Container,
  Row,
  Col,
  FormText,
  Label,
  Card,
  Button,
} from "reactstrap";
import { useForm } from "react-hook-form";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

export interface RatingProps {
  navigation: any;
  formData: any;
  setForm: any;
}

const Rating: React.SFC<RatingProps> = ({ formData, navigation }) => {
  const { skills } = formData;

  const { previous, next } = navigation;

  const [skillsrating, setSkillstRating] = useState(skills);

  const handleRating = (skill: any, e: any) => {
    let updatedSkills = [...skillsrating];

    updatedSkills.forEach((one) => {
      if (one.skill === skill) {
        one.rating = e.rating;
      }
    });

    setSkillstRating(updatedSkills);
  };

  useEffect(() => {
    formData["skills"] = skillsrating;
  }, [skillsrating]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={5}>
          <form className="mt-5">
            <Row className="mt-3">
              <h3 style={{ color: "white" }}>Please rate your Skills</h3>
            </Row>
            <Row className="mb-3">
              {skills &&
                skills.map((skill: any, i: any) => (
                  <Col className="text-center p-3 m-1" xs={12}>
                    <Card className="p-3 m-1 text-center">
                      <h5>{skill.skill}</h5>
                      <h4>
                        <Rater
                          total={10}
                          rating={skill.rating}
                          // interactive={}
                          onRate={(e) => handleRating(skill.skill, e)}
                          //  onRating={}
                        />
                      </h4>
                    </Card>
                  </Col>
                ))}
            </Row>

            <span className="text-center d-flex justify-content-center mt-3">
              {/* <Button color="light" className=" m-2" onClick={previous}>
                Previous
              </Button> */}
              <Button color="light" className=" m-2" onClick={next}>
                Next
              </Button>
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Rating;
