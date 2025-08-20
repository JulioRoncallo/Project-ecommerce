import { ILoginProps, ILoginErrors, IRegisterErrors, IRegisterProps } from "@/types";

export const validateFormLogin = (values: ILoginProps): ILoginErrors => {
    const errors: ILoginErrors = {};


    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    return errors;
};


export const validateFormRegister = (values: IRegisterProps): IRegisterErrors => {
    const errors: IRegisterErrors = {};

    if (!values.name.trim()) {
        errors.name = "Name is required";
    }

    if (!values.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "You must confirm your password";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
    }

    if (!values.address.trim()) {
        errors.address = "Address is required";
    }

    if (!values.phone.trim()) {
        errors.phone = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(values.phone)) {
        errors.phone = "Invalid phone number";
    }

    return errors;
};