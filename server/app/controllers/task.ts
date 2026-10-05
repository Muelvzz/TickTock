import type { Request, Response } from "express"
import { supabase } from "../config/supabaseClient.ts"

type CreateTaskPayload = {
  user_id: number,
  task_title: string,
  priority?: string,
  category_id?: number,
}

type ReadTaskPayload = {
  id: string
}

export const createTask = async (req: Request<CreateTaskPayload>, res: Response) => {
  const { user_id, task_title, priority, category_id } = req.body
  const payload: CreateTaskPayload = {
    user_id: user_id,
    task_title: task_title
  }

  if (priority) payload.priority = priority
  if (category_id) payload.category_id = category_id

  try {
    const { data, error } = await supabase.from("task").insert([payload]).select()

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "There's a problem of adding a task. Please check the Console Tab for more information." })
    }

    const createdTask = data[0]
    return res.status(201).json({ message: "Successfully created a new Task", data: createdTask })
  } catch (error) {
    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });
  }
}

export const readTask = async (req: Request<ReadTaskPayload>, res: Response) => {
  const { id } = req.params

  try {

    const { data, error } = (await supabase.from("task").select("*").eq("user_id", id))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      res.status(400).json({ message: "There's a problem of fetching all the Tasks. Please check the Console Tab for more information." })
      return
    }

    if (!data) {
      return res.status(404).json({ message: "No task found" })
    }

    return res.status(200).json({ message: "Task Fetched Successfully", data: data })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }
}