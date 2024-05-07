import express from "express";
const doctorRouter = express.Router();
import doctorControllers from "../controllers/doctors.js";
import allValidations from "../utils/validation.js";

doctorRouter.post('/addDoctor', allValidations.addDoctorValidation,doctorControllers.addDoctor);
doctorRouter.get('/listDoctors', doctorControllers.getAllDoctors);
doctorRouter.get('/findByIdDoctors/:id', doctorControllers.findById);
doctorRouter.get('/availableHours/:id', doctorControllers.getAvailableHours);
doctorRouter.put('/updateDoctors/:id', doctorControllers.updateDoctors);
doctorRouter.delete('/deleteDoctors/:id',doctorControllers.deleteDoctor);

export default doctorRouter;
