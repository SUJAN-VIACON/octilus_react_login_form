import * as yup from "yup";

import React, { useContext } from 'react'

import { BiArrowBack } from "react-icons/bi";
import Button from './ui/Button'
import FormWrapper from './ui/FormWrapper'
import { Formik } from "formik";
import Input from './ui/Input'
import { multiStepFormContext } from '../MultiStepFormProvider'

const validationSchema = yup.object().shape({
    position: yup.string()
        .required("Please choose your Position")
});

const JobInfoForm = () => {
    const multiStepForm = useContext(multiStepFormContext);
    const submitForm = (formValues: any) => {
        multiStepForm.dispatch({ type: "registerUser", payload: { value: formValues } })
    }

    return (
        <div className='px-20 py-10'>
            <button className=" text-gray-500 flex items-center gap-2 mb-7 text-lg"
            onClick={()=>multiStepForm.dispatch({type:"goBack"})}
            >
                <BiArrowBack />
                <span className="uppercase">previous step</span>
            </button>
            <Formik
                initialValues={{ position: '' }}
                onSubmit={(values) => submitForm(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <FormWrapper title='Select Job Position'>
                        <hr />
                        <Input type="radio2"
                            label="Frontend Developer"
                            name="position"
                            value="Frontend Developer"
                            handleChange={handleChange}
                            error={errors.position} />

                        <Input type="radio2"
                            label="WordPress Developer"
                            name="position"
                            value="WordPress Developer"
                            handleChange={handleChange}
                            error={errors.position} />

                        <Input type="radio2"
                            label="UI/UX Designer"
                            name="position"
                            value="UI/UX Designer"
                            handleChange={handleChange}
                            error={errors.position} />

                        <Input type="radio2"
                            label="Support Engineer"
                            name="position"
                            value="Support Engineer"
                            handleChange={handleChange}
                            error={errors.position} />

                        <Input type="radio2"
                            label="Graphic Designer"
                            name="position"
                            value="Graphic Designer"
                            handleChange={handleChange}
                            error={errors.position} />

                        <Button title='SUBMIT' type="submit" handleOnClick={handleSubmit} />
                    </FormWrapper>
                )}
            </Formik>
        </div>
    )
}

export default JobInfoForm