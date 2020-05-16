import React, { useState, useEffect } from "react";
import { CustomInput, Input, Container, Row, Col, FormText, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import "react-rater/lib/react-rater.css";

export interface SignupProps {
  navigation: any;
  formData: any;
  setForm: any;
}

const Profile: React.SFC<SignupProps> = ({ navigation, formData, setForm }) => {
  const [file, setFile] = useState() as any;
  const [uploadedFile, setUploadedFile] = useState() as any;
  const { firstName, lastName, email, age } = formData;

  const { next } = navigation;

  const { register } = useForm();

  const handleImageChange = async (e: any) => {
    e.preventDefault();
    let reader = new FileReader();
    let thefile = e.target.files[0];

    reader.onloadend = () => {
      setFile(thefile);
      setUploadedFile(reader.result);
    };

    reader.readAsDataURL(thefile);
  };

  useEffect(() => {
    formData["image"] = file;
  }, [uploadedFile]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={5}>
          <form className="mt-5">
            <Input
              type="text"
              placeholder="First name"
              name="firstName"
              className="mt-3"
              value={firstName}
              onChange={setForm}
              innerRef={register({ required: true, maxLength: 80 })}
            />
            <Input
              type="text"
              placeholder="Last name"
              name="lastName"
              className="mt-3"
              value={lastName}
              onChange={setForm}
              innerRef={register({ required: true, maxLength: 100 })}
            />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              className="mt-3"
              value={email}
              onChange={setForm}
              innerRef={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <Input
              className="mt-3"
              type="number"
              placeholder="Age"
              value={age}
              name="age"
              onChange={setForm}
              ref={register}
            />

            <CustomInput
              type="file"
              accept="image/*"
              id="exampleCustomFileBrowser"
              className="mt-3"
              onChange={(e) => handleImageChange(e)}
            />
            <FormText className="text-center" color="muted">
              Please upload a photo less than 1MBs
            </FormText>

            <span className="text-center d-flex justify-content-center mt-3">
              <Button color="light" onClick={next}>
                Next
              </Button>
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
