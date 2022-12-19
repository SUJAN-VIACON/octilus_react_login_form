import { MultiStepFormProvider, multiStepFormContext } from '../MultiStepFormProvider';

import JobInfoForm from '../components/JobInfoForm';
import SideBanner from "../components/SideBanner";
import UserInfoForm from "../components/UserInfoForm"

const Registration = () => {

    return (
        <>
            <div className='w-full h-screen grid grid-cols-2'>
                <SideBanner />
                <MultiStepFormProvider
                    formComponents={
                        [<UserInfoForm />, <JobInfoForm />]
                    }
                />
            </div>
        </>
    )
}

export default Registration