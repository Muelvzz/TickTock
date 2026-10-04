import express from "express"

import { getSession } from "../utils/getSession.ts";
import { signUp, signIn, logout } from "../controllers/users.ts";

export const userRouter = express.Router()

userRouter.get("/session", getSession)
userRouter.post("/sign-up", signUp)
userRouter.post("/sign-in", signIn)
userRouter.get("/logout", logout)