import bookingModel from "../models/booking.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";

    const createBooking = asyncWrapper(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new BadRequestError(errors.array()[0].msg));
        }
    
        try {
            // Extract necessary data from the request body
            const { doctor, date } = req.body;
    
            // Find existing bookings for the same doctor and date
            const existingBookings = await bookingModel.find({ doctor, date });
    
            // Calculate the queue position
            const queuePosition = existingBookings.length + 1;
    
            // Create the new booking with the calculated position
            const booking = await bookingModel.create({
                ...req.body, // Include other fields from the request body
                queuePosition
            });
    
            res.status(201).json(booking);
        } catch (error) {
            next(error); // Pass any errors to the error handling middleware
        }
    });
//     const errors = validationResult(req);
//     if(!errors.isEmpty()){
//       next(new BadRequestError(errors.array([0].msg)));
//     }
//     const booking = await bookingModel.create(req.body);
//     res.status(201).json(booking);
// });

const getAllBookings = asyncWrapper(async(req,res,next) =>{
    const bookings = await bookingModel.find({});
    if(bookings){
        return res.status(200).json({
            nbHits: bookings.length,
            bookings
        });   
    }
})

const updateBookings = asyncWrapper(async(req,res,next) =>{
    const bookId = req.params.id;
    const updates = req.body;

    const updatedBookings = await bookingModel.findByIdAndUpdate(bookId, updates, {new: true});
    if(!updatedBookings){
        return next(new NotFoundError('booking not found'));
    }
    res.status(200).json(updatedBookings);
});

const findById = asyncWrapper(async(req,res,next) => {
    const bookId = req.params.id;
    const foundBookings = await bookingModel.findById(bookId);
    if(!foundBookings){
        return next(new NotFoundError('booking not found'));
    }
    res.status(200).json(foundBookings);
});

const getPositionInQueue = asyncWrapper(async(req,res,next) =>{
    const patientId = req.params.patientId;
    //find the booking for my patient
    const booking = await bookingModel.findOne({patient: patientId});
    if(!booking){
        return next(new NotFoundError('booking not found for this patient'));
    }
    res.status(200).json(booking);
});

const deleteBookings = asyncWrapper(async(req,res,next) => {
    const bookId  = req.params.id;
    const deletedBookings = await bookingModel.findOneAndDelete(bookId);
    if(!deletedBookings){
        return next(new NotFoundError('Booking not found'));
    }
    return res.status(200).json({message: 'Booking deleted'});
})

const BookingControllers = {
    createBooking,
    getAllBookings,
    updateBookings,
    findById,
    deleteBookings,
    getPositionInQueue
};
export default BookingControllers;