import { Data } from "@angular/router";

export interface SeoPage {
    id: string,
    name: string,
    rout: string,
    status: string,
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


export interface SeoPages {
    allCityData:SeoPage[]
}
