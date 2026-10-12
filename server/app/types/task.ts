export type UpdateTaskQuery = {
  category_id?: number,
  task_title?: string,
  priority?: "No Priority" | "Low Priority" | "Medium Priority" | "High Priority",
  status?: "Won't Do" | "Not Complete" | "In Progress" | "Complete"
  created_at?: Date
}

export type CreateTaskPayload = {
  user_id: number,
  task_title: string,
  priority?: "No Priority" | "Low Priority" | "Medium Priority" | "High Priority",
  category_id?: number,
}

export type ReadTaskPayload = {
  id: string
}

export type TaskResponse = {
  message: string
}

export type TaskId = {
  taskid: number
}

export type Task = {
  user_id: number
  task_id: number,
  created_at?: Date,
  priority?: "No Priority" | "Low Priority" | "Medium Priority" | "High Priority",
  status?: "Won't Do" | "Not Complete" | "In Progress" | "Complete"
  task_title?: string,
  category_id: number
}

export type ReadTaskResponse = {
  message: string,
  data?: Task[]
}