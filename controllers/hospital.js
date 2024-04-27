import hospitalModel from '../models/hospitals.js';
import NotFoundError from '../Errors/NotFoundError.js';
import BadRequestError from '../Errors/BadRequestError.js';
import {validationResult} from 'express-validator';
import asyncWrapper from '../middleware/async.js';

const addHospital = asyncWrapper(async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new BadRequestError(errors.array()[0].msg));
    }
    const hospital = await hospitalModel.create(req.body);
    res.status(201).json({hospital});
})
const getAllHospitals = asyncWrapper(async(req,res,next) =>{
    const hospitals = await hospitalModel.find({});
    if(hospitals){
        return res.status(200).json({
            nbHits: hospitals.length,
            hospitals
        });
    }
}) 
const updateHospitals = asyncWrapper(async(req,res,next) => {
    const hospitalId = req.params.id;
    const updates = req.body;

    const updatedHospital = await hospitalModel.findByIdAndUpdate(hospitalId,updates, {new: true});
    if(!updatedDoctor){
        return next(new NotFoundError('Hospital not found'));
    };
    res.status(200).json(updatedHospital);
});

const findById = asyncWrapper(async (req,res,next) =>{
    const hospitalId = req.params.id;
    const foundHospital = await hospitalModel.findById(hospitalId);
    if(!foundHospital){
        return next(new NotFoundError('Hospital not found'));
    }
    return res.status(200).json(foundHospital);
});
const findByLocation = asyncWrapper(async (req,res,next) =>{
    const hospitalStatus = req.params.location;
    const foundHospital = await hospitalModel.find({status: hospitalStatus});
    if(!foundHospital){
        return next(new NotFoundError('Hospital in that location not found'));
    }
    return res.status(200).json(foundHospital);
});

const  deleteHospital = asyncWrapper(async (req,res,next) => {
    const hospitalId = req.params.id;
    const deletedHospital = await hospitalModel.findByIdAndDelete(hospitalId);
    if(!deletedHospital){
     return next(new NotFoundError('Hospital not found'));
    }
    res.status(200).json({message: 'Hospital deleted'});
 });

const hospitalControllers = {
    addHospital,
    getAllHospitals,
    updateHospitals,
    findById,
    findByLocation,
    deleteHospital
}
export default hospitalControllers;