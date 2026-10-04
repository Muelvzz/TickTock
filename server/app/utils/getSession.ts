import type { Request, Response } from "express";
import { redisClient } from "../config/redisClient.ts";

export const getSession = async (req: Request, res: Response) => {
  const sessionCookie = req.headers.cookie
    ?.split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith("sessionId="));
  const sessionId = sessionCookie?.slice("sessionId=".length);

  if (!sessionId) {
    return res.status(401).json({ message: "No active session" });
  }

  try {
    const sessionData = await redisClient.get(`session:${ sessionId }`);
    if (!sessionData) {
      return res.status(401).json({ message: "Session expired" });
    }

    return res.status(200).json({ user: JSON.parse(sessionData) });
  } catch {
    return res.status(500).json({ message: "Unable to verify session" });
  }
};