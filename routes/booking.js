import express from "express";
const bookingRouter = express.Router();
import BookingControllers from "../controllers/booking.js";
import allValidations from "../utils/validation.js";

bookingRouter.post('/createBooking',allValidations.addBookingValidation,BookingControllers.createBooking);
bookingRouter.get('/listBooking', BookingControllers.getAllBookings);
bookingRouter.get('/findByIdBooking/:id', BookingControllers.findById);
bookingRouter.get('/getPosition/:id', BookingControllers.getPositionInQueue);
bookingRouter.put('/updateBooking/:id',BookingControllers.updateBookings);
bookingRouter.delete('/deleteBookings/:id', BookingControllers.deleteBookings);

export default bookingRouter;