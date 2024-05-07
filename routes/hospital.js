import express from "express";
const hospitalRouter = express.Router();
import hospitalControllers from "../controllers/hospital.js";
import allValidations from "../utils/validation.js";

hospitalRouter.post('/addHospitals',allValidations.addHospitalValidation,hospitalControllers.addHospital);
hospitalRouter.get('/listHospitals',hospitalControllers.getAllHospitals);
hospitalRouter.get('/findByIdHospitals/:id', hospitalControllers.findById);
hospitalRouter.get('/findByLocation/:location',hospitalControllers.findByLocation);
hospitalRouter.put('/updateHospitals/:id', hospitalControllers.updateHospitals);
hospitalRouter.delete('/deleteHospital/:id',hospitalControllers.deleteHospital);

export default hospitalRouter;