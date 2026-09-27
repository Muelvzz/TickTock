const URL = "http://localhost:3000"

export async function loginUserData(email: string, password: string) {
  const url = `${ URL }/sign-in`

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
      credentials: "include"
    })

    if (!response.ok) {
      throw new Error(`[CLIENT] Response status: ${ response.status }`)
    }
    
    const result = await response.json()

    return result

  } catch (error: unknown) {

    if (error instanceof Error) {
      console.error(`[CLIENT] ${ error.message }`)
    } else {
      console.error(`[CLIENT] Unknown Error: ${ error }`)
      throw error
    }

  }
}

export async function registerUserData(username: string, email: string, password: string) {
  const url = `${ URL }/sign-up`

  try {

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
      credentials: "include"
    })

    if (!response.ok) {
      throw new Error(`[CLIENT] Response status: ${ response.status }`)
    }
    
    const result = await response.json()

    return result

  } catch (error: unknown) {

    if (error instanceof Error) {
      console.error(`[CLIENT] ${ error.message }`)
    } else {
      console.error(`[CLIENT] Unknown Error: ${ error }`)
      throw error
    }

  }
}