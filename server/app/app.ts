import express from "express";
import { userRouter } from "./routes/userRoutes.ts";
import session from "express-session"
import dotenv from "dotenv"
import cors from "cors"

const allowList = ["http://localhost:5173"]

const corsOptions = {
  origin: function (
    origin: string | undefined, 
    callback: (err: Error | null, allow?: boolean
  ) => void) {

    if (!origin || allowList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allows by CORS"))
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}

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

app.use("", userRouter)
app.listen(3000, () => {
  console.log("[SERVER] Server is running at http://localhost:3000")
})

export default app