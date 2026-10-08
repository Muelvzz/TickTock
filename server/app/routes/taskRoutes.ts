import express from "express"
import { createTask, deleteTask, readTask, updateTask } from "../controllers/task.ts"

export const taskRouter = express.Router()

taskRouter.post("/task", createTask)
taskRouter.get("/task/:id", readTask)
taskRouter.delete("/task/:taskid", deleteTask)
taskRouter.patch("/task/:taskid", updateTask)