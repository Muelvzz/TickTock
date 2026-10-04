import type { Request, Response, NextFunction } from "express"

export const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies.sessionId) {
    return res.status(401).json({ message: "Access Denied"})
  } else {
    next()
  }
}