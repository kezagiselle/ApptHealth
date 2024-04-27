import mongoose from 'mongoose';

const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log('Connected to DB...'))
    .catch((err) => console.log(err.message));
}
export default connectDB;
