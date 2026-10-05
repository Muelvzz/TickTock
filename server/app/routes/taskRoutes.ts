import express from "express"
import { createTask, readTask } from "../controllers/task.ts"

export const taskRouter = express.Router()

taskRouter.post("/task", createTask)
taskRouter.get("/task/:id", readTask)