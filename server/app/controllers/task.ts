import type { Request, Response } from "express"
import { supabase } from "../config/supabaseClient.ts"
import type { UpdateTaskQuery, CreateTaskPayload, TaskResponse, ReadTaskPayload, ReadTaskResponse, TaskId } from "../types/task.ts"
import { queryComposition } from "../utils/queryComp.ts"
import { redisClient } from "../config/redisClient.ts"

// TODO: Fix the wrong http output of the Task Route
// FIXME: Create input validation

export const createTask = async (req: Request<CreateTaskPayload>, res: Response<TaskResponse>): Promise<Response<TaskResponse>> => {
  const { user_id, task_title, priority, category_id } = req.body
  const cacheKey = `user_id:${user_id}`
  const payload: CreateTaskPayload = {
    user_id: user_id,
    task_title: task_title
  }

  if (priority) payload.priority = priority
  if (category_id) payload.category_id = category_id

  try {
    const { error } = await supabase.from("task").insert([payload])

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "There's a problem of adding a task. Please check the Console Tab for more information." })
    }

    console.log(`[SERVER] Task: "${task_title}" is added to User ${user_id} Todo List.`)
    console.log(`[SERVER] Clearing User ${user_id} Cache`)
    await redisClient.unlink(cacheKey)

    return res.status(201).json({ message: `${task_title} is added to User ${user_id} Todo List.` })
  } catch (error) {
    if (error instanceof Error) { return res.status(422).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });
  }
}

export const readTask = async (req: Request<ReadTaskPayload>, res: Response<ReadTaskResponse>): Promise<Response<ReadTaskResponse>> => {
  const { id } = req.params

  try {

    const cacheKey = `user_id:${id}`
    const cachedData = await redisClient.get(cacheKey)

    if (cachedData) {
      console.log(`[SERVER] Database Record ${id} Found.`)
      return res.status(200).json({ message: "Task Fetched Successfully", data: JSON.parse(cachedData) })
    }

    console.log("[SERVER] Cache Miss! Fetching from database")
    const { data, error } = (await supabase.from("task").select("*").eq("user_id", id))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "There's a problem of fetching all the Tasks. Please check the Console Tab for more information." })
    }

    if (!data) {
      return res.status(404).json({ message: "No task found" })
    }
  
    console.log("[SERVER] Data is fetched. Storing the data into Cache.")
    await redisClient.set(cacheKey, JSON.stringify(data), { EX: 900 })
    return res.status(200).json({ message: "Task Fetched Successfully", data: data })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }
}

export const updateTask = async (req: Request<TaskId>, res: Response<TaskResponse>): Promise<Response<TaskResponse>> => {

  const query: UpdateTaskQuery = queryComposition(req.body)
  const { taskid } = req.params

  try {

    const { data, error } = await supabase.from("task").update(query).eq("task_id", taskid).select()

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "There's a problem of fetching all the Categories. Please check the Console Tab for more information." })
    }

    if (!data) {
      return res.status(404).json({ message: "No task found" })
    }

    console.log(`[SERVER] Task ID ${taskid} is updated. Clearing User ${data[0].user_id} Cache.`)
    const cacheKey = `user_id:${data[0].user_id}`
    await redisClient.unlink(cacheKey)

    return res.status(201).json({ message: "Successfully updated a task" })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }

}

export const deleteTask = async (req: Request<TaskId>, res: Response): Promise<Response<TaskResponse>> => {

  const { taskid } = req.params
  
  try {
    const { data } = await supabase.from("task").delete().eq("task_id", taskid).select("user_id")

    if (!data) {
      return res.status(404).json({ message: "No task found" })
    }

    console.log(`[SERVER] Deleted Task ${taskid}. Clearing up User ${data} Cache.`)
    const cacheKey = `user_id:${data}`
    await redisClient.unlink(cacheKey)

    return res.status(200).json({ message: "Task Deleted Successfully"})

  } catch (error) {

    console.log("[SERVER] Error Found.")
    if (error instanceof Error) { return res.status(400).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }

}