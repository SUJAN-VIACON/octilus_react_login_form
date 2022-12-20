import { ReactElement, createContext, useReducer } from "react";

import { useInfoType } from './useMultiStepForm';
import { useMultiStepForm } from "./useMultiStepForm";

interface providerType {
    components: ReactElement[],
}
interface contextType {
    state?: useInfoType,
    dispatch?: any
}

export const multiStepFormContext = createContext<contextType>({});

export const MultiStepFormProvider = ({ components }: providerType) => {

    const { step, registerAndGoNext, updateAndGoHomePage, goBack, formData } = useMultiStepForm(components);

    const multiStepFormReducer = (state: any, action: any) => {
        switch (action.type) {
            case 'registerAndGoNext':
                registerAndGoNext(action.payload.values);
                return action.payload.values;
            case 'goBack':
                goBack();
                return formData
            case 'updateAndGoHomePage':
                updateAndGoHomePage(action.payload.values)
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