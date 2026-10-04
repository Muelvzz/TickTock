import type { Request, Response } from "express"
import { supabase } from "../config/supabaseClient.ts"

type CreateCategoryPayload = {
  user_id: number,
  category_name: string,
  category_logo?: string
}

type ReadCategoryPayload = {
  id: string
}

type UpdateCategoryPayload = {
  categoryId: number,
  categoryName: string
}

type DeleteCategoryPayload = {
  categoryId: number
}

export const createCategory = async (req: Request, res: Response) => {
  
  const { userId, categoryName, categoryLogo } = req.body

  const payload: CreateCategoryPayload = {
    user_id: userId,
    category_name: categoryName
  }

  if (categoryLogo) payload.category_logo = categoryLogo

  try {
    const { data, error } = await supabase.from("category").insert([payload]).select()
  
    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      return res.status(400).json({ message: "There's a problem of adding the user. Please check the Console Tab for more information." })
      return
    }

    const createdCategory = data[0]
    return res.status(201).json({ message: "Successfully created a new category", data: createdCategory })
  } catch (error) {
    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });
  }

}

export const readCategory = async (req: Request<ReadCategoryPayload>, res: Response) => {

  const { id } = req.params

  try {

    const { data, error } = (await supabase.from("category").select("*").eq("user_id", id))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      res.status(400).json({ message: "There's a problem of fetching all the Categories. Please check the Console Tab for more information." })
      return
    }

    if (!data) {
      return res.status(404).json({ message: "No categories found" })
    }

    return res.status(200).json({ message: "Categories Fetched Successfully", data: data })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }

}

export const updateCategory = async (req: Request<UpdateCategoryPayload>, res: Response) => {

  const { categoryId, categoryValue } = req.body

  try {

    const { data, error } = (await supabase.
      from("category").
      update({ "category_name": categoryValue }).
      eq("category_id", categoryId))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      res.status(400).json({ message: "There's a problem of fetching all the Categories. Please check the Console Tab for more information." })
      return
    }

    return res.status(201).json({ message: "Successfully updated a category" })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }

}

export const deleteCategory = async(req: Request<DeleteCategoryPayload>, res: Response) => {

  const { categoryId } = req.params

  try {

    const { data, error } = (await supabase.
      from("category").
      delete().
      eq("category_id", categoryId)
    )
    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      res.status(400).json({ message: "There's a problem of fetching all the Categories. Please check the Console Tab for more information." })
      return
    }

    return res.status(201).json({ message: "Successfully deleted a category" })

  } catch (error) {

    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });

  }

}