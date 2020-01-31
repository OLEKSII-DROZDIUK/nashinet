import { Data } from "@angular/router";

export interface City {
    id: string,
    name: string,
    rout: string,
    published?:boolean,
    whoCreate?:string,
    dateCreate?: Data,
    dataChange?: Data,
    whoLastChange?: string,
    email?: string,
    logo?: string,
    googleMap?: string,
    workTimeSaturday?: string,
    workTimeSunday?: string,
    workTimeWeekdats?: string,
}


export interface Cities {
    allCityData:City[]
}
