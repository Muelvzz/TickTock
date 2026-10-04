import express from "express"
import { createCategory, deleteCategory, readCategory, updateCategory } from "../controllers/category.ts"

export const categoryRouter = express.Router()

categoryRouter.post("/category", createCategory)
categoryRouter.get("/category/:id", readCategory)
categoryRouter.patch("/category", updateCategory)
categoryRouter.delete("/category/:categoryId", deleteCategory)