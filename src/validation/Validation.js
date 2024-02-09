import * as yup from "yup";

export const userSchema = yup.object().shape({
    user_name: yup.string().required('Name is required').max(50),
    user_email: yup.string().email('Invalid email').required('Email is required'),
    user_phone: yup.number(),
    user_subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required').max(400),
});