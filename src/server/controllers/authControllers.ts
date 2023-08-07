// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "server/models/User";
// GET All User
//  Public
const RegisterUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Register User');

});

const LoginUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Login User');
});



export {
  RegisterUser,
  LoginUser,
};
