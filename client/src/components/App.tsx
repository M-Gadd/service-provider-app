import React from "react";
import { Container } from "reactstrap";

import MultiStepForm from "./MultiStepForm";

export interface SignupProps {}

const App: React.SFC<SignupProps> = () => {
  return (
    <Container>
      <MultiStepForm />
    </Container>
  );
};

export default App;
