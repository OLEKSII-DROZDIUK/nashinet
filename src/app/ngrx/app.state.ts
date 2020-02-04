import {City} from '../interfaces/city.model';


export interface AppState {
    cityPage:{
        allCityData:City[]
    },
    headerPage:{
        choiceHeaderPage:number
    },
    citySeoPage: {
        citySeoPages: any
    }
};