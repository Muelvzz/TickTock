import type { Request, Response, NextFunction } from "express"

type ProtectRouteType = { sessionId: string }

export const protectRoute = async (req: Request<ProtectRouteType>, res: Response, next: NextFunction) => {
  if (!req.cookies.sessionId) {
    return res.status(401).json({ message: "Access Denied"})
  } else {
    next()
  }
}