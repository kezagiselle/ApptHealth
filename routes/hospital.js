import express from "express";
const hospitalRouter = express.Router();
import hospitalControllers from "../controllers/hospital.js";
// import allValidations from "../utils/validation.js";

hospitalRouter.post('/addHospital',hospitalControllers.addHospital);
hospitalRouter.get('/listHospitals',hospitalControllers.getAllHospitals);
hospitalRouter.get('/findById/:id', hospitalControllers.findById);
hospitalRouter.get('/findByLocation',hospitalControllers.findByLocation);
hospitalRouter.put('/update/:id', hospitalControllers.updateHospitals);
hospitalRouter.delete('/delete/:id',hospitalControllers.deleteHospital);

export default hospitalRouter;