import type { Request, Response } from "express";
import { supabase } from "../config/supabaseClient.ts";
import { hashPassword, validateAndNormalizeEmail, verifyPassword } from "../utils/verifyCredential.ts";
import { redisClient } from "../config/redisClient.ts";
import { randomUUID } from "crypto";

type SignUpType = {
  username: string,
  email: string,
  password: string
}

type SignInType = {
  email: string,
  password: string
}

export const signUp = async (req: Request<SignUpType>, res: Response) => {

  const { email, password, username } = req.body

  if (!email || !password) { 
    return res.status(400).json({ message: "Error: Email and password values must not be empty" }) 
  }

  try {
    const validPassword = await hashPassword(password)
    const validEmail = validateAndNormalizeEmail(email)

    const { data, error } = await supabase.from("user").insert([{email: validEmail, password: validPassword, username: username}]).select()

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      res.status(400).json({ message: "There's a problem of adding the user. Please check the Console Tab for more information." })
      return
    }

    const createdUser = data[0]
    const sessionId = randomUUID()

    const sessionData = { userId: createdUser.id, email: createdUser.email, username: createdUser.username }

    const SESSION_TTL = 1800
    await redisClient.setEx(`session:${ sessionId }`, SESSION_TTL, JSON.stringify(sessionData))

    res.cookie("sessionId", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: SESSION_TTL * 1000
    })

    return res.status(201).json({ message: `Successfully created ${ data[0].username }.`, user: sessionData })
  } catch (error) {
    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });
  }
  
}

export const signIn = async (req: Request<SignInType>, res: Response) => {

  const { email, password } = req.body

  // 1. Does the request have email and password?
  if (!email || !password) { 
    return res.status(400).json({ message: "Error: Email and password values must not be empty" }) 
  }

  try {
    // 2.1. is the email valid?
    const validEmail = validateAndNormalizeEmail(email)

    // 3. Does the email exist in the Database?
    const { data, error } = (await supabase.from("user").select("*").eq("email", validEmail))

    if (error) {
      console.log(`[SERVER] Error: ${ error.message }`)
      res.status(400).json({ message: "There's a problem of logging the user. Please check the Console Tab for more information." })
      return
    }

    // 2.2. is the password valid?
    const validPassword = await verifyPassword(password, data[0].password)

    // 4. Does the request contain a session ID cookie?
    const sessionId = req.sessionID
    if (sessionId) {
      req.session.destroy((err) => {
        if (err) { return res.status(500).json({ error: 'Failed to destroy session' }) }
      })
      res.clearCookie("connect.sid", { path: "/" })
      res.clearCookie("sessionId", { path: "/" })
    }

    const createdUser = data[0]
    const newSessionId = randomUUID()

    const sessionData = { userId: createdUser.id, email: createdUser.email, username: createdUser.username }

    const SESSION_TTL = 1800
    await redisClient.setEx(`session:${ newSessionId }`, SESSION_TTL, JSON.stringify(sessionData))

    res.cookie("sessionId", newSessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: SESSION_TTL * 1000
    })

    return res.status(201).json({ message: `Successfully logged in ${ data[0].username }.`, user: sessionData })
  } catch (error) {
    if (error instanceof Error) { return res.status(401).json({ message: error.message })}
    return res.status(500).json({ message: "Internal server error." });
  }

}

export const logout = (req: Request<string>, res: Response) => {

  // 1. Check if the Server stores your cookie
  if (!req.cookies.sessionId) {
    return res.status(404).json({ error: "Logged Out Unsuccessful: No Existing Sessions Found." })
  } else {

    // 2. Clear both "connect.sid" and "sessionId"
    req.session.destroy((err) => {
      if (err) { 
        return res.status(500).json({ error: 'Failed to destroy session' }) 
      }
      res.clearCookie("connect.sid", { path: "/" })
      res.clearCookie("sessionId", { path: "/" })
  
      return res.status(401).json({ message: "Successfully logged out" })
    })
  }
}