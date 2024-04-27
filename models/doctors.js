import mongoose from "mongoose";
import {model, Schema} from 'mongoose';

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    specialty:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['Surgeon', 'Physician', 'Pediatrician', 'Gynecologist', 'Dentist', 'Other'],
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'hospital',
        required: true
    },
    availableHours:[{
        dayOfWeek: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        from: {
            type: Number,
            min: 0,
            max: 23,
            required: true
        },
        to: {
            type: Number,
            min: 0,
            max: 23,
            required: true
        }
    }]
});
const doctorModel = mongoose.model("doctor",doctorSchema);
export default doctorModel;
