import express from "express";
const patientRouter = express.Router();
import patientControllers from "../controllers/patient.js";
import allValidations from "../utils/validation.js";

patientRouter.post('/addPatient',allValidations.addPatientValidation,patientControllers.addPatient);
patientRouter.get('/listPatients',patientControllers.getAllPatients);
patientRouter.get('/findByIdPatient/:id', patientControllers.findById)
patientRouter.put('/updatePatients/:id',patientControllers.updatePatient);
patientRouter.delete('/deletePatients/:id',patientControllers.deletePatient);

export default patientRouter;