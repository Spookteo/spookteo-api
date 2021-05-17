import { Request } from "express";
import { Role } from "../types";

export type AuthenticatedRequest = Request & {
  user: { userId: string; role: string };
};

export interface HttpRequest<params = any, query = any, body = any> {
  body: body;
  params: params;
  query: query;
  user: {
    userId: string;
    role: Role;
  }
  
}
