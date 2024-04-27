import patientModel from '../models/patients.js';
import NotFoundError from '../Errors/NotFoundError.js';
import BadRequestError from '../Errors/BadRequestError.js';
import {validationResult} from 'express-validator';
import asyncWrapper from '../middleware/async.js';

const addPatient = asyncWrapper(async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new BadRequestError(errors.array()[0].msg));
    }
    const patients = await patientModel.create(req.body);
    res.status(201).json({patients});
});
const getAllPatients = asyncWrapper(async(req,res,next) =>{
    const patients = await patientModel.find({});
    if(patients){
        return res.status(200).json({
            nbHits: patients.length,
            patients
        });
    }
}) 
const updatePatient = asyncWrapper(async(req,res,next) => {
    const patientId = req.params.id;
    const updates = req.body;

    const updatedPatient = await patientModel.findByIdAndUpdate(patientId,updates, {new: true});
    if(!updatedPatient){
        return next(new NotFoundError('Patient not found'));
    };
    res.status(200).json(updatedPatient);
});

const findById = asyncWrapper(async (req,res,next) =>{
    const patientId = req.params.id;
    const foundPatient = await patientModel.findById(patientId);
    if(!foundPatient){
        return next(new NotFoundError('Patient not found'));
    }
    return res.status(200).json(foundHospital);
});
const  deletePatient = asyncWrapper(async (req,res,next) => {
    const patientId = req.params.id;
    const deletedPatient = await patientModel.findByIdAndDelete(patientId);
    if(!deletedPatient){
     return next(new NotFoundError('Patient not found'));
    }
    res.status(200).json({message: 'Patient deleted'});
 });

 const patientControllers = {
    addPatient,
    getAllPatients,
    updatePatient,
    findById,
    deletePatient
 }
 export default patientControllers;