import "yup-phone";

import * as yup from "yup";

export default class UserRequest {

    static rules() {
        return yup.object().shape({
            name: yup.string().required("Name is required"),
            email: yup
              .string()
              .email("please enter valid email")
              .required("Email is required"),
            phone: yup.string()
              .phone("Please enter a valid phone number")
              .required("A phone number is required"),
            gender: yup.string()
              .required("Please choose your gender")
          });
    }

}