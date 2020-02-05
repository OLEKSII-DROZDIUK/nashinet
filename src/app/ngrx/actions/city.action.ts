import { Action } from '@ngrx/store';
import { City} from '../../interfaces/city.model';

export enum CITY_ACTION {
    LOAD_CITIES = "LOAD_CITIES",
    LOAD_CITIES_SUCCESS = "LOAD_CITIES_SUCCESS",
    LOAD_CITIES_FAIL = "LOAD_CITIES_FAIL",
    ADD_NEW_CITY = "ADD_NEW_CITY",
    ADD_NEW_CITY_SUCCESS = "ADD_NEW_CITY_SUCCESS",
    ADD_NEW_CITY_FAIL = "ADD_NEW_CITY_FAIL",
    DEL_ONE_CITY = "DEL_ONE_CITY",
    DEL_ONE_CITY_SUCCESS = "DEL_ONE_CITY_SUCCESS",
    DEL_ONE_CITY_FAIL = "DEL_ONE_CITY_FAIL",
};

//use effect ngrx

export class LoadCitiesAction implements Action {
    readonly type = CITY_ACTION.LOAD_CITIES;
};

export class LoadCitiesSuccessAction implements Action {
    readonly type = CITY_ACTION.LOAD_CITIES_SUCCESS;
    constructor(public payload:City[]) {}
};

export class LoadCitiesFailAction implements Action {
    readonly type = CITY_ACTION.LOAD_CITIES_FAIL;
    constructor(public payload:Error) {}
};

//use effect ngrx

export class AddCity implements Action {
    readonly type = CITY_ACTION.ADD_NEW_CITY;

    constructor(public payload:City) {}
};

export class DeleteCity implements Action {
    readonly type = CITY_ACTION.DEL_ONE_CITY;

    constructor(public payload:City[]) {}
};


export type CityActions = AddCity| DeleteCity |  LoadCitiesAction |  LoadCitiesSuccessAction | LoadCitiesFailAction;
