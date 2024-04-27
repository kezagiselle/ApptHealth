import mongoose from 'mongoose';
import {model, Schema} from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    nameOfHospital:{
        type: String,
        required: true,
    },
    patientChoose:{
        type: Schema.Types.ObjectId,
        ref: "patient",
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    doctorsAvailable:[{
       type: Schema.Types.ObjectId,
       ref: 'doctor',
       required: true
    }]
});
const hospitalModel = mongoose.model("hospital",hospitalSchema);
export default hospitalModel;