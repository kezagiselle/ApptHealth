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
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'hospital',
        required: true
    },
    availability: [{
        dayOfWeek: {
            type: String,
            enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            required: true
        },
        from: {
            hour: {
                type: Number,
                min: 1,
                max: 12,
                required: true
            },
            minute: {
                type: Number,
                min: 0,
                max: 59,
                default: 0
            },
            period: {
                type: String,
                enum: ['AM', 'PM'],
                required: true
            }
        },
        to: {
            hour: {
                type: Number,
                min: 1,
                max: 12,
                required: true
            },
            minute: {
                type: Number,
                min: 0,
                max: 59,
                default: 0
            },
            period: {
                type: String,
                enum: ['AM', 'PM'],
                required: true
            }
        }
    }]
});
const doctorModel = mongoose.model("doctor",doctorSchema);
export default doctorModel;
