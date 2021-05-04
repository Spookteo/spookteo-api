import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "@shared/express-tools/types";
import { Role } from "@shared/types";

export function buildRoleMiddleware(role: Role) {
  return function RoleMiddleware(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) {
    if (req.user.role !== role) {
      return res.status(401).json({ status: "ko", message: "UNAUTHORIZED" });
    }
    return next();
  };
}
