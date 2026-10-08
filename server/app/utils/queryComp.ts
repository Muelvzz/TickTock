import type { Request } from "express";
import type { UpdateTaskQuery } from "../types/task.ts";

export const queryComposition = (reqQuery: UpdateTaskQuery ): UpdateTaskQuery => {
  const { category_id, task_title, priority, status, created_at } = reqQuery
  let queryComp: UpdateTaskQuery = {}

  if (category_id) queryComp.category_id = category_id
  if (task_title) queryComp.task_title = task_title
  if (priority) queryComp.priority = priority
  if (status) queryComp.status = status
  if (created_at) queryComp.created_at = new Date(new Date().toLocaleDateString('en-CA'))

  return reqQuery
}