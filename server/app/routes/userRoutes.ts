import express from "express"

import { getSession, signUp, signIn } from "../controllers/users.ts";

export const userRouter = express.Router()

userRouter.get("/session", getSession)
userRouter.post("/sign-up", signUp)
userRouter.post("/sign-in", signIn)