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