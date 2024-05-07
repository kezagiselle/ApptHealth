import doctorModel from '../models/doctors.js';
import NotFoundError from '../Errors/NotFoundError.js';
import BadRequestError from '../Errors/BadRequestError.js';
import {validationResult} from 'express-validator';
import asyncWrapper from '../middleware/async.js';

const addDoctor = asyncWrapper(async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new BadRequestError(errors.array()[0].msg));
    }
    const doctor = await doctorModel.create(req.body);
    res.status(201).json({doctor});
})

const getAllDoctors = asyncWrapper(async(req,res,next) =>{
    const doctors = await doctorModel.find({});
    if(doctors){
        return res.status(200).json({
            nbHits: doctors.length,
            doctors
        });
    }
}) 
const updateDoctors = asyncWrapper(async(req,res,next) => {
    const doctorId = req.params.id;
    const updates = req.body;

    const updatedDoctor = await doctorModel.findByIdAndUpdate(doctorId,updates, {new: true});
    if(!updatedDoctor){
        return next(new NotFoundError('Doctor not found'));
    };
    res.status(200).json(updatedDoctor);
});

const findById = asyncWrapper(async (req,res,next) =>{
    const doctorId = req.params.id;
    const foundDoctor = await doctorModel.findByIdAndUpdate(doctorId);
    if(!foundDoctor){
        return next(new NotFoundError('Doctor not found'));
    }
    return res.status(200).json(foundDoctor);
});
const getAvailableHours = asyncWrapper(async(req,res,next) =>{
    const doctorId = req.params.id;
    const foundDoctor = await doctorModel.findById(doctorId);
    if(!foundDoctor){
        return next(new NotFoundError('Doctor not Available'));
    }
    const availability = foundDoctor.availability;
    res.status(200).json({availability});
});

const  deleteDoctor = asyncWrapper(async (req,res,next) => {
   const doctorId = req.params.id;
   const deletedDoctor = await doctorModel.findByIdAndDelete(doctorId);
   if(!deletedDoctor){
    return next(new NotFoundError('Doctor not found'));
   }
   res.status(200).json({message: 'Doctor deleted'});
});

const doctorControllers = {
    addDoctor,
    getAllDoctors,
    updateDoctors,
    findById,
    getAvailableHours,
    deleteDoctor
}
export default doctorControllers;
