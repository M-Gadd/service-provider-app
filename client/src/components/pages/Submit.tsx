import React, { useState } from "react";
import { useSubmit } from "../../hooks/useSubmit";
import { Row, Col, Card, Container, Button } from "reactstrap";
import ClientResponse from "../ClientResponse";
import Moment from "react-moment";
export interface SubmitProps {
  navigation: any;
  formData: any;
}
const Submit: React.SFC<SubmitProps> = ({ formData, navigation }) => {
  const { lastName, email, skills } = formData;
  const { requests, isLoading } = useSubmit(formData);
  const [choices, setChoices] = useState(Array);
  const { go } = navigation;

  if (!lastName || !email || !skills) {
    return (
      <Row className="mt-5">
        <Col className="text-center" xs={12}>
          <h3 style={{ color: "white" }}>Sorry, some information is missing</h3>
          <Button onClick={() => go("profile")}>Edit</Button>
        </Col>
      </Row>
    );
  }

  if (isLoading) {
    return (
      <Row className="mt-5">
        <Col className="text-center" xs={12}>
          <h3 style={{ color: "white" }}>
            Thank you for submitting your profile. Requests will be coming shortly
          </h3>
        </Col>
      </Row>
    );
  }

  const handleChoices = (request: any, status: string) => {
    let response = true;
    console.log(status);

    if (status === "rejected") {
      if (choices.length) {
        choices.forEach((one: any) => {
          console.log(one);
          if (one.client === request.client) {
            setChoices(
              choices.filter((stateChoice: any) => {
                return stateChoice.client !== request.client;
              }),
            );
          }
        });
      }
    }
    if (status === "accepted") {
      if (choices.length) {
        const duplicate = choices.filter(
          (one: any) => one.startDate === request.startDate,
        );
        if (duplicate.length) {
          alert("sorry you aleady have accepted a request on the same starting date");
          response = false;
        } else {
          setChoices((choices) => [...choices, request]);
        }
      } else {
        setChoices((choices) => [...choices, request]);
      }
    }
    return response;
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col className="text-center" xs={12}>
          <h3 style={{ color: "white" }}> Client requests...</h3>
        </Col>
      </Row>
      <Row className="mt-5">
        {requests &&
          requests.map((request: any) => (
            <Col xs={6}>
              <Card className="p-3 m-3 text-center">
                <h4 className="mb-3">{request.client}</h4>
                <Row>
                  <Col xs={6}>
                    <h6>{`Job offer for Mr. ${request.lastName} `}</h6>
                    <h6>{`Email: ${request.email}`}</h6>
                    <h6>{`Skill required: ${request.skillRequired}`}</h6>
                  </Col>
                  <Col xs={6}>
                    <span>
                      <h6 className="m-0 p-0">Starting Date:</h6>
                      <Moment format="DD/MM/YYYY">{request.startDate}</Moment>
                    </span>
                    <span>
                      <h6 className="m-0 p-0">Ending Date:</h6>
                      <Moment format="DD/MM/YYYY">{request.endDate}</Moment>
                    </span>
                  </Col>
                </Row>
                <ClientResponse
                  handleChoice={handleChoices}
                  request={request}
                  choices={choices}
                />
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
export default Submit;
