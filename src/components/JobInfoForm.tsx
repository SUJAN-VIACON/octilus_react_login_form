import * as yup from "yup";

import React, { useContext } from "react";

import { BiArrowBack } from "react-icons/bi";
import Button from "./ui/Button";
import FormWrapper from "./ui/FormWrapper";
import { Formik } from "formik";
import Input from "./ui/Input";
import { multiStepFormContext } from "../MultiStepFormProvider";

const validationSchema = yup.object().shape({
  job_title: yup.string().required("Please choose your job_title"),
});

interface jobInfoType {
  job_title: string;
}

const JobInfoForm = () => {
  const multiStepForm = useContext(multiStepFormContext);

  const submitForm = (formValues: jobInfoType) => {
    multiStepForm.dispatch({
      type: "updateAndGoHomePage",
      payload: { values: formValues },
    });
  };

  return (
    <div className="px-20 py-10">
      {/* back button */}
      <button
        className=" text-gray-500 flex items-center gap-2 mb-7 text-lg"
        onClick={() => multiStepForm.dispatch({ type: "goBack" })}
      >
        <BiArrowBack />
        <span className="uppercase">previous step</span>
      </button>

      {/* form */}
      <Formik
        initialValues={{ job_title: "" }}
        onSubmit={(values: { job_title: string }) => submitForm(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <FormWrapper title="Select Job Title">
            <hr />
            <Input
              type="radio2"
              label="Frontend Developer"
              name="job_title"
              value="Frontend Developer"
              handleChange={handleChange}
              error={
                errors.job_title && touched.job_title ? errors.job_title : null
              }
            />

            <Input
              type="radio2"
              label="WordPress Developer"
              name="job_title"
              value="WordPress Developer"
              handleChange={handleChange}
              error={
                errors.job_title && touched.job_title ? errors.job_title : null
              }
            />

            <Input
              type="radio2"
              label="UI/UX Designer"
              name="job_title"
              value="UI/UX Designer"
              handleChange={handleChange}
              error={
                errors.job_title && touched.job_title ? errors.job_title : null
              }
            />

            <Input
              type="radio2"
              label="Support Engineer"
              name="job_title"
              value="Support Engineer"
              handleChange={handleChange}
              error={
                errors.job_title && touched.job_title ? errors.job_title : null
              }
            />

            <Input
              type="radio2"
              label="Graphic Designer"
              name="job_title"
              value="Graphic Designer"
              handleChange={handleChange}
              error={
                errors.job_title && touched.job_title ? errors.job_title : null
              }
            />

            <Button title="SUBMIT" type="submit" handleOnClick={handleSubmit} />
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
};

export default JobInfoForm;
