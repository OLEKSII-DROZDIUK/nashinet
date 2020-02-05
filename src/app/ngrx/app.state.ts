import {City} from '../interfaces/city.model';

import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';


export interface AppState {
    cityPage:{
        allCityData:City[]
    },
    headerPage:{
        choiceHeaderPage:number
    },
    citySeoPage: {
        citySeoPages: any
    },
    usersPage: {
        usersData: Array<any>
    }
};


// export const getAllCities = createFeatureSelector<any>('cityPage');