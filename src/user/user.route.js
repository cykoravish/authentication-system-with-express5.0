import express, { Router } from "express";
import { User } from "./user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get("/:userId", auth, async (req, res, next) => {
  const requestUserId = req.params.userId;
  const tokenUserId = req.userId;
  if (requestUserId !== tokenUserId) {
    const error = new Error("Not allowed");
    error.statusCode = 403;
    next(error);
    return;
  }

  const user = await User.findOne({ _id: requestUserId }, {password: false, __v:false});

  res.json({ user });
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  //validate re body
  if (!email || !password) {
    const error = new Error("email and password required");
    error.statusCode = 404;
    next(error);
    return;
  }

  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("invalid  redentials");
    error.statusCode = 400;
    next(error);
    return;
  }

  const matched = bcrypt.compareSync(password, user.password);
  if (!matched) {
    const error = new Error("invalid  redentials");
    error.statusCode = 400;
    next(error);
    return;
  }

  //json token
  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60,
  });

  res.json({ token });
});

router.post("/", async (req, res, next) => {
  //   throw new Error("error occur in /api/users");
  console.log("body: ", req.body);
  const { name, email, password } = req.body;

  //validate req
  if (!name || !email || !password) {
    const error = new Error("All fields are required");
    error.statusCode = 400;
    next(error);
    // res.status(400).json({ message: "all fields are required" });
    // return;
  }
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const result = await User.create({
      name,
      email,
      password: hash,
    });
    // console.log("result: ", result);
    res.status(201).json({ id: result._id });
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
});

export default router;
