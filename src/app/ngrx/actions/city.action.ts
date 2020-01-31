import { Action } from '@ngrx/store';
import { City} from '../../interfaces/city.model';

export namespace CITY_ACTION {
    export const ADD_NEW_CITY:string = "ADD_NEW_CITY";
    export const SELECT_CITY:string = "SELECT_CITY";
    export const DEL_ONE_CITY:string = "DEL_ONE_CITY";
    export const GET_ALL_CYTIES: string = "GET_ALL_CYTIES";
}


export class AddCity implements Action {
    readonly type = CITY_ACTION.ADD_NEW_CITY;

    constructor(public payload:City) {}
};

export class DeleteCity implements Action {
    readonly type = CITY_ACTION.DEL_ONE_CITY;

    constructor(public payload:City[]) {}
};