type Category = {
  user_id: number,
  category_id: number,
  category_name: string,
  category_logo: string
}

export type CreateCategoryPayload = {
  user_id: number,
  category_name: string,
  category_logo?: string
}

export type ReadCategoryPayload = {
  id: string
}

export type UpdateCategoryPayload = {
  category_id?: number,
  category_name: string
  category_logo?: string
}

export type DeleteCategoryPayload = {
  categoryId: number
}

export type CategoryResponse = {
  message: string
}

export type ReadCategoryResponse = {
  message: string,
  data?: Category[]
}