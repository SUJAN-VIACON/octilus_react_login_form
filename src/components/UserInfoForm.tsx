import Button from './ui/Button'
import FormWrapper from './ui/FormWrapper'
import { Formik } from "formik";
import Input from './ui/Input'
import UserRequest from '../Requests/UserRequest'
import { multiStepFormContext } from '../MultiStepFormProvider'
import { useContext } from 'react'
import { useInfoType } from '../useMultiStepForm';

const validationSchema = UserRequest.rules();

const UserInfoForm = () => {
  const multiStepForm = useContext(multiStepFormContext);
  const formData = multiStepForm.state;

  const goToNextStep = (formValues: useInfoType) => {
    multiStepForm.dispatch({
      type: 'registerAndGoNext',
      payload: { values: formValues }
    });
  }

  return (
    <div className='px-20 py-10'>
      <Formik
        initialValues={{ name: formData?.name, email: formData?.email, phone: formData?.phone, gender: formData?.gender }}
        onSubmit={(values: useInfoType) => goToNextStep(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (

          <FormWrapper title='Personal information'>
            <Input type="text" value={values.name} placeholder="Name" name="name"
              handleChange={handleChange("name")}
              error={errors.name && touched.name ? errors.name : null}
            />
            <Input type="email" value={values.email} placeholder="Email Address"
              name="email" handleChange={handleChange("email")}
              error={errors.email && touched.email ? errors.email : null}
            />
            <Input type="number" value={values.phone} placeholder="Phone" name="number"
              handleChange={handleChange("phone")}
              error={errors.phone && touched.phone ? errors.phone : null}
            />

            <div className='space-y-5 text-lg'>
              <span className='font-bold'>Select Gender</span>
              <div className='flex gap-5'>
                <Input type="radio" value="male" label="Male" name="gender"
                  isChecked={formData?.gender == "male"}
                  handleChange={handleChange("gender")}
                  error={errors.gender && touched.gender ? errors.gender : null}
                />
                <Input type="radio" value="female" label="Female" name="gender"
                  isChecked={formData?.gender == "female"}
                  handleChange={handleChange("gender")}
                  error={errors.gender && touched.gender ? errors.gender : null}
                />
              </div>
            </div>

            <Button title='Next' handleOnClick={handleSubmit} type="submit" />
          </FormWrapper>
        )}
      </Formik>
    </div >
  )
}

export default UserInfoForm