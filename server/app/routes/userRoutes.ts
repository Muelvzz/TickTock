import express from "express"

import { signUp, signIn } from "../controllers/users.ts";

export const userRouter = express.Router()

userRouter.post("/sign-up", signUp)
userRouter.post("/sign-in", signIn)