export enum Role {
  ADMIN = "ADMIN",
  WRITE = "WRITE",
  READ = "READ",
}

export interface UserInfos {
  _id?: string;
  username: string;
  key?: string;
  salt?: string;
  role: Role;
}

export interface UserSchema {
  _id: string;
  username: string;
  key: string;
  salt: string;
  role: Role;
}
