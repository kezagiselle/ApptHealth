import mongoose from "mongoose";
import {model, Schema} from 'mongoose';
const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    patient: {
        type:Schema.Types.ObjectId,
        ref: 'patient',
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    queuePosition: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const bookingModel = mongoose.model('booking',bookingSchema);
export default bookingModel;