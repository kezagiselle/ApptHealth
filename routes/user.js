import express from 'express';
const userRouter = express.Router();
import userControllers from '../controllers/user.js';
import allValidations from '../utils/validation.js';

userRouter.post('/signUp',allValidations.signUpValidation,userControllers.signUp);
userRouter.post('/signIn',allValidations.signInValidation,userControllers.SignIn);
userRouter.post('/verify',allValidations.otpValidation,userControllers.validateOtp);
userRouter.post('/forgotPassword',allValidations.forgotPasswordValidation,userControllers.forgotPassword);
userRouter.post('/resetPassword',allValidations.resetPasswordValidation,userControllers.resetPassword);
userRouter.delete('/deleteUser/:id',userControllers.deleteUser);

export default userRouter;

