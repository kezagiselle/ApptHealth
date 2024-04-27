import { body } from "express-validator";

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

const allValidations = [
    addPatientValidation,
    addDoctorValidation,
    addHospitalValidation,
    addBookingValidation
];
export default allValidations;

