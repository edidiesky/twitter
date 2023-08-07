// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/User";

// GET All User
//  Public
const RegisterUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password} = req.body;
  //
  if (!email || !password || !name) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);
  const Tempuser = {
    email,
    password: hashedpassword,
    ...req.body
  };
  const user = await User.create(Tempuser);

  const jwtcode:Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    jwtcode,
    { expiresIn: "2d" }
  );

  res.status(200).json({ user, token });

});

const LoginUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).send('Login User');
});



export {
  RegisterUser,
  LoginUser,
};
