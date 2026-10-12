export function checkCategoryName(categoryName: string): string {

  const lettersOnly: RegExp = /^[a-zA-Z]+$/;

  if (!categoryName) throw new Error("Name category is empty.")
  if (!lettersOnly.test(categoryName)) throw new Error("Numbers and Symbols are not allowed.")
  if (categoryName.length >= 15) throw new Error("Category Name is too long.")

  return categoryName
}

export function checkCategoryLogo(categoryLogo: string): string {

  const symbolsOnly: RegExp = /^[^a-zA-Z0-9]*$/;

  if (!categoryLogo) throw new Error("Logo is empty.")
  if (!symbolsOnly.test(categoryLogo)) throw new Error("Numbers and Characters are not allowed.")
  if (categoryLogo.length > 1) throw new Error("Category Logo is too long.")

  return categoryLogo
}