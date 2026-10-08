export type UpdateTaskQuery = {
  category_id?: number,
  task_title?: string,
  priority?: "No Priority" | "Low Priority" | "Medium Priority" | "High Priority",
  status?: "Won't Do" | "Not Complete" | "In Progress" | "Complete"
  created_at?: Date
}