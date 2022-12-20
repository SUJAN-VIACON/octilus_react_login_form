import { ReactElement, useState } from "react";

import axios from "axios";
import { useNavigate } from 'react-router-dom';

export interface useInfoType {
    name: string,
    email: string,
    phone: string,
    gender: string,
    job_title?: string
}

interface createResponseType {
    success: boolean,
    id: string,
}

export function useMultiStepForm(steps: ReactElement[]) {
    const navigate = useNavigate();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formData, setFormData] = useState({});
    const [registeredUserId, setRegisteredUserId] = useState();

    const registerAndGoNext = async (formValues: useInfoType) => {
        setFormData(formValues);
        const response: createResponseType | any = await createUser(formValues);
        if (response && response?.data?.success && !registeredUserId) {
            setRegisteredUserId(response.data.id)
        }

        goNext();
    }

    const updateAndGoHomePage = async (formValues: { job_title: string }) => {
        setFormData((e: useInfoType) => {
            return { ...e, ...formValues }
        })
        const response = await updateUser(formValues);
        if (!response || !response?.data?.success) {
            return alert("something went wrong");
        }

        return navigate("/home");
    }

    const goNext = () => {
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

    const createUser = (userData: useInfoType) => {
        try {
            return axios.post('/api/create.php', userData)
        } catch (error) {
            console.log(error)
        }
        return;
    }

    const updateUser = (data: { job_title: string }) => {
        if (!registeredUserId) goBack();

        const updateData = { id: registeredUserId, ...data };
        try {
            return axios.post('/api/update.php', updateData).then()
        } catch (error) {
            console.log(error)
        }
        return;
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        registerAndGoNext,
        updateAndGoHomePage,
        goBack,
        formData,
    }
}