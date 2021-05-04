import { Role } from "../types";

export function validRole(maybeRole: string): Role {
  switch (maybeRole) {
    case Role.ADMIN:
      return Role.ADMIN;
    case Role.READ:
      return Role.READ;
    case Role.WRITE:
      return Role.WRITE;
    default:
        return null;
  }
}
