import { Request } from "express";
// interfaces

export interface RecordInfos {
    _id?:string;
    date:Date;
    pressure:number;
    temperature:Array<number>;
    hygrometry:number;
}


export interface UserInfos {
    _id?:string;
    username:string;
    key?:string;
    salt?:string
    role:Role;
}

// enums

export enum Role {
    ADMIN = "ADMIN",
    WRITE = "WRITE",
    READ = "READ"
}

export type AuthenticatedRequest = Request & {user: {userId: string, role: string}};

export interface HttpRequest<params = any, query = any, body = any> {
    body: body,
    params: params,
    query: query,
    userId: string,
    role: Role
}
