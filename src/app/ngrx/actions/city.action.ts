import { Action } from '@ngrx/store';
import { City} from '../../interfaces/city.model';

export enum CITY_ACTION {
    ADD_NEW_CITY = "ADD_NEW_CITY",
    SELECT_CITY = "SELECT_CITY",
    DEL_ONE_CITY = "DEL_ONE_CITY",
    GET_ALL_CYTIES = "GET_ALL_CYTIES",
}


export class AddCity implements Action {
    readonly type = CITY_ACTION.ADD_NEW_CITY;

    constructor(public payload:City) {}
};

export class DeleteCity implements Action {
    readonly type = CITY_ACTION.DEL_ONE_CITY;

    constructor(public payload:City[]) {}
};


export type CityActions = AddCity| DeleteCity;
