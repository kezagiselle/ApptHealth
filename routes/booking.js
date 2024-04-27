import express from "express";
const bookingRouter = express.Router();
import BookingControllers from "../controllers/booking.js";
// import allValidations from "../utils/validation.js";

bookingRouter.post('/createBooking', BookingControllers.createBooking);
bookingRouter.get('/listBooking', BookingControllers.getAllBookings);
bookingRouter.get('/findById/:id', BookingControllers.findById);
bookingRouter.get('/getPosition', BookingControllers.getPositionInQueue);
bookingRouter.put('/update/:id',BookingControllers.updateBookings);
bookingRouter.delete('/delete/:id', BookingControllers.deleteBookings);

export default bookingRouter;