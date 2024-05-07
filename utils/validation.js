import {body} from "express-validator";

const addPatientValidation = [
    body("firstName", "FirstName is required"),
    body("Address","Address is required")
];
const addDoctorValidation = [
    body("name", "Name is required")
    // body("Address","Address is required");
];
const addHospitalValidation = [
    body("nameOfHospital", "Hospital name is required")
    // body("Address","Address is required");
];
const addBookingValidation = [
    body("patient", "patient is required")
    // body("Address","Address is required");
];
const signUpValidation = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    body("password", "password is required").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lowercase letters").isStrongPassword()
];
const signInValidation = [
    body("email", "Email is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    body("password", "password is required").not().isEmpty(),
    body("password", "invalid password").isStrongPassword()
  ];
  const otpValidation = [
    body("otp","otp must be provided").not().isEmpty()
];
const forgotPasswordValidation = [
    body("email", "Email must be provided").not().isEmpty(),
];
const resetPasswordValidation = [
    body("password", "password must be provided").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword(),
    // body("confirmPassword", "confirmPassword must be provided").not().isEmpty(),
    // body("confirmPassword", "confirmPassword must be provided with atleast 8 characters").isStrongPassword(),
    // body("confirmPassword", "Passwords do not match").custom((value, { req }) => value === req.body.password)   
];


const allValidations = {
    addPatientValidation,
    addDoctorValidation,
    addHospitalValidation,
    addBookingValidation,
    signUpValidation,
    signInValidation,
    otpValidation,
    forgotPasswordValidation,
    resetPasswordValidation
}
    

export default allValidations;

