import express from "express";
import { userRouter } from "./routes/userRoutes.ts";
import { categoryRouter } from "./routes/categoryRoutes.ts";
import { protectRoute } from "./middleware/auth.ts";
import session from "express-session"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import { corsOptions } from "./config/corsSettings.ts";
import { taskRouter } from "./routes/taskRoutes.ts";

dotenv.config()
const app = express()
app.use(cors(corsOptions))

app.use(session({
  secret: process.env.SECRET_KEY || "secret_key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(express.json())
app.use(cookieParser())

app.use("", userRouter)
app.use("", protectRoute, categoryRouter)
app.use("", protectRoute, taskRouter)

app.listen(3000, () => {
  console.log("[SERVER] Server is running at http://localhost:3000")
})

export default app