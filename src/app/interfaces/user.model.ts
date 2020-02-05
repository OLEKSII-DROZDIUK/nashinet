import { Data } from "@angular/router";

export interface User {
    id: string,
    name: string,
    role: string,
    logo: string,
    whoCreate?:string,
    dateCreate?: Data,
    dataChange?: Data,
    whoLastChange?: string,
    email?: string,
    phone?: string
}


export interface Users {
    allCityData:User[]
}
