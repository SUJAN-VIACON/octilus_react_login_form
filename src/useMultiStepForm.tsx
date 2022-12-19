import { ReactElement, useState } from "react";

import axios from "axios";

export interface useInfoType {
    name: string,
    email: string,
    phone: string,
    gender: string,
    job_title?:string
}

export function useMultiStepForm(steps: ReactElement[]) {

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState({});
    const [registeredUserId, setRegisteredUserId] = useState();

    const registerAndGoNext = (formValues: useInfoType) => {
        setFormData(formValues);
        // registerUser(formValues);
        setCurrentStepIndex((i: number) => {
            if (i == steps.length - 1) return i;
            return i + 1;
        })
    }

    const goBack = () => {
        setCurrentStepIndex((i) => {
            if (i <= 0) return i;
            return i - 1;
        })
    }

    const registerUser = (userData: useInfoType) => {
        axios.post(`${process.env.API_URL}/create.php`, userData)
            .then((res) => console.log(res))
            .catch(function (error) {
                console.log(error);
            });
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        registerAndGoNext,
        goBack,
        formData,
        registerUser
    }
}