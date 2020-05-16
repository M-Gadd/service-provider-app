import React, { useState, useEffect } from "react";
import { CustomInput, Container, Row, Col, Button } from "reactstrap";
import "react-rater/lib/react-rater.css";

export interface ProfileProps {
  navigation: any;
  formData: any;
  setForm: any;
}

const Skills: React.SFC<ProfileProps> = ({ formData, navigation }) => {
  const [skills] = useState([
    { skill: "Python", rating: 0 },
    { skill: "Javascript", rating: 0 },
    { skill: "Ruby", rating: 0 },
    { skill: "GoLang", rating: 0 },
    { skill: "Elixir", rating: 0 },
    { skill: "Rust", rating: 0 },
    { skill: "Java", rating: 0 },
    { skill: "TypeScript", rating: 0 },
    { skill: "React", rating: 0 },
    { skill: "Vue", rating: 0 },
  ]);

  const [chosenSkills, setChosenSkills] = useState(Array);

  const { previous, next } = navigation;

  const toggleSwitch = (skill: any) => {
    if (chosenSkills.includes(skill)) {
      setChosenSkills(
        chosenSkills.filter((stateSkill) => {
          return stateSkill !== skill;
        }),
      );
    } else {
      setChosenSkills((chosenSkills) => [...chosenSkills, skill]);
    }
  };

  useEffect(() => {
    formData["skills"] = chosenSkills;
  }, [chosenSkills]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={5}>
          <form className="mt-5">
            <Row className="mt-3">
              <h3 style={{ color: "white" }}>Please choose 3 Skills</h3>
            </Row>
            <Row className="mb-3">
              {skills &&
                skills.map((skill, i) => (
                  <Col xs={4}>
                    <CustomInput
                      className="p-3 m-3"
                      onChange={() => toggleSwitch(skill)}
                      type="switch"
                      id={`${i}`}
                      label={skill.skill}
                      disabled={
                        chosenSkills.length === 3 && !chosenSkills.includes(skill)
                          ? true
                          : false
                      }
                    />
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
      <style>{`
          label {
            color: white;
          }
          
          `}</style>
    </Container>
  );
};

export default Skills;
