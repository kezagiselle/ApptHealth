import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express();
import connectDB from './db/connectDB.js';
import ErrorHandler from '/Users/lenovo/Documents/ApptHealth/middleware/ErrorHandler.js';
import bookingRouter from './routes/booking.js';
import doctorRouter from './routes/doctor.js';
import hospitalRouter from './routes/hospital.js';
import patientRouter from './routes/patient.js';
import userRouter from './routes/user.js';
import tokenRouter from './routes/authToken.js';
import swaggerUi from 'swagger-ui-express';
import swagger from './docs/swagger.json' assert {type:"json"}



app.use(express.json());
app.use(bookingRouter);
app.use(doctorRouter);
app.use(patientRouter);
app.use(doctorRouter);
app.use(userRouter);
app.use(tokenRouter);
app.use(hospitalRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));

const port = process.env.PORT || 5000
//db connection

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI || 'mongodb+srv://Gisele:Gisele123@cluster0.cxn8sri.mongodb.net/')
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
       console.log(error)
    }
}
start();

app.use(ErrorHandler);
