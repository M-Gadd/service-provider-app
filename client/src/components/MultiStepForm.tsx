/* @ts-ignore */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Review from "./pages/Review";
import Submit from "./pages/Submit";
import Rating from "./pages/Rating";

const steps = [
  { id: "profile" },
  { id: "skills" },
  { id: "rating" },
  { id: "review" },
  { id: "submit" },
];

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  age: "",
  image: "",
  skills: [],
};

export interface UseStepParams {
  initialStep: any;
  steps: any;
}

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  /* @ts-ignore */
  const { step, navigation } = useStep({ initialStep: 0, steps });
  /* @ts-ignore */
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "profile":
      return <Profile {...props} />;
    case "skills":
      return <Skills {...props} />;
    case "rating":
      return <Rating {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
