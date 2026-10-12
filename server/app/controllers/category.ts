import type { Request, Response } from "express"
import { supabase } from "../config/supabaseClient.ts"
import type { CreateCategoryPayload, ReadCategoryPayload, UpdateCategoryPayload, DeleteCategoryPayload, CategoryResponse, ReadCategoryResponse } from "../types/category.ts"
import { checkCategoryName, checkCategoryLogo } from "../utils/checkCategoryInput.ts"

export const createCategory = async (
  req: Request<CreateCategoryPayload>, 
  res: Response<CategoryResponse>
): Promise<Response<CategoryResponse>> => {

  const { userId, categoryName, categoryLogo } = req.body
  const parsedName = checkCategoryName(categoryName)
  const parsedLogo = checkCategoryLogo(categoryLogo)

  const payload: CreateCategoryPayload = {
    user_id: userId,
    category_name: parsedName
  }

  if (categoryLogo) payload.category_logo = parsedLogo

  try {
    const { error } = await supabase.from("category").insert([payload])
  
    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "There's a problem of adding a category. Please check the Console Tab for more information." })
    }

    return res.status(201).json({ message: "Successfully created a new category"})
  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: `[SERVER] Error: ${ error.message }` })}
    return res.status(500).json({ message: `[SERVER] Internal server error` });
  }

}

export const readCategory = async (
  req: Request<ReadCategoryPayload>, 
  res: Response<ReadCategoryResponse>
): Promise<Response<ReadCategoryResponse>> => {

  const { id } = req.params

  try {

    const { data, error } = (await supabase.from("category").select("*").eq("user_id", id))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ 
        message: "There's a problem of fetching all the Categories. Please check the Console Tab for more information." 
      })
    }

    if (!data) {
      return res.status(404).json({ message: "No categories found" })
    }

    return res.status(200).json({ 
      message: "Categories Fetched Successfully", 
      data: data 
    })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: `[SERVER] Error: ${ error.message }` })}
    return res.status(500).json({ message: `[SERVER] Internal server error` });

  }

}

export const updateCategory = async (
  req: Request<UpdateCategoryPayload>, 
  res: Response<CategoryResponse>
): Promise<Response<CategoryResponse>> => {

  const { category_id, category_name, category_logo } = req.body
  const parsedName = checkCategoryName(category_name)

  const updatePayload: UpdateCategoryPayload = {
    category_name: parsedName
  }

  if (category_logo) {
    const parsedLogo = checkCategoryLogo(category_logo)
    updatePayload.category_logo = parsedLogo
  }

  try {

    const { error } = (await supabase.
      from("category").
      update(updatePayload).
      eq("category_id", category_id))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "[SERVER] Server Error. Please check the Console Tab for more information." })
    }

    return res.status(201).json({ message: "Successfully updated a category" })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: `[SERVER] Error: ${ error.message }` })}
    return res.status(500).json({ message: `[SERVER] Internal server error` });

  }

}

export const deleteCategory = async(
  req: Request<DeleteCategoryPayload>, 
  res: Response<CategoryResponse>
): Promise<Response<CategoryResponse>> => {

  const { categoryId } = req.params

  try {

    const { error } = (await supabase.
      from("category").
      delete().
      eq("category_id", categoryId)
    )

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "[SERVER] Server Error. Please check the Console Tab for more information." })
    }

    return res.status(201).json({ message: "Successfully deleted a category" })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: `[SERVER] Error: ${ error.message }` })}
    return res.status(500).json({ message: `[SERVER] Internal server error` });
  }

}