import { Data } from "@angular/router";

export interface CityInLocationPage {
    id: number,
    name: string,
    rout: string,
    whoCreate?:string,
    dateCreate?: Data,
    dataChange?: Data,
    whoLastChange?: string,
    email?: string,
    logo?: string,
    googleMap?: string,
    workTimeSaturday?: string,
    workTimeSunday?: string,
    workTimeWeekdats?: string
}



