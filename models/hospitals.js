import mongoose from 'mongoose';
// import {model, Schema} from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    nameOfHospital:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    doctorName:{
        type: String,
        required: true
    },
    doctorRole:{
       type: String,
       required: true
    }
});
const hospitalModel = mongoose.model("hospital",hospitalSchema);
export default hospitalModel;