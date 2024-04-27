import express from "express";
const patientRouter = express.Router();
import patientControllers from "../controllers/patient.js";
// import allValidations from "../utils/validation.js";

patientRouter.post('/addPatient',patientControllers.addPatient);
patientRouter.get('/listPatients',patientControllers.getAllPatients);
patientRouter.get('/findById/:id', patientControllers.findById)
patientRouter.put('/update/:id',patientControllers.updatePatient);
patientRouter.delete('/delete/:id',patientControllers.deletePatient);

export default patientRouter;