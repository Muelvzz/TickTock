import express from "express";
import { userRouter } from "./routes/userRoutes.ts";
import session from "express-session"
import dotenv from "dotenv"

dotenv.config()
const app = express()

app.use(session({
  secret: process.env.SECRET_KEY || "secret_key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.json())

app.use("", userRouter)
app.listen(3000, () => {
  console.log("[SERVER] Server is running at http://localhost:3000")
})

export default app