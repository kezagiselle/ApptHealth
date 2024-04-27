import express from "express";
const doctorRouter = express.Router();
import doctorControllers from "../controllers/doctors.js";
// import allValidations from "../utils/validation.js";

doctorRouter.post('/addDoctor', doctorControllers.addDoctor);
doctorRouter.get('/listDoctors', doctorControllers.getAllDoctors);
doctorRouter.get('/findById', doctorControllers.findById);
doctorRouter.get('/availableHours', doctorControllers.getAvailableHours);
doctorRouter.get('/availableDays', doctorControllers.getAvailableDays);
doctorRouter.put('/update/:id', doctorControllers.updateDoctors);
doctorRouter.delete('/delete/:id',doctorControllers.deleteDoctor);

export default doctorRouter;
