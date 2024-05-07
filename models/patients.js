import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3
    },
    nationalId: {
        type: String,
        required: true,
        minlength:13,
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    phone: {
      type: String,
      required: true,
        },
    address: {
      type: String,
       required: true,
        },
    insurance: {
        type: String,
        required: true
            },
    medicalHistory: {
        type: String,
        required: true
            },
    medications:{
        type: String,
        required: true
            },
    appointments: [{
        date: {
        type: Date
                },
        description: {
         type: String
                }
            }]        
        });
const patientModel = mongoose.model('patient',patientSchema);
export default patientModel;