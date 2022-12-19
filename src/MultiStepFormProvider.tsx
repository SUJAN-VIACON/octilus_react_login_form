import { ReactElement, createContext, useReducer } from "react";

import { useInfoType } from './useMultiStepForm';
import { useMultiStepForm } from "./useMultiStepForm";

interface providerType {
    formComponents: ReactElement[],
}

interface contextType {
    state?: useInfoType,
    dispatch?: any
}

export const multiStepFormContext = createContext<contextType>({});

export const MultiStepFormProvider = ({ formComponents }: providerType) => {

    const { step, registerAndGoNext, goBack, formData } = useMultiStepForm(formComponents);

    const multiStepFormReducer = (state: any, action: any) => {
        switch (action.type) {
            case 'registerAndGoNext':
                registerAndGoNext(action.payload.values);
                return action.payload.values;
            case 'goBack':
                goBack();
                return formData
            case 'registerUser':
                return
            default:
                return formData;
        }
    }

    const [state, dispatch]: any = useReducer(multiStepFormReducer, formData);
    
    return (
        <multiStepFormContext.Provider value={{ state, dispatch }} >
            {step}
        </multiStepFormContext.Provider>
    )

}