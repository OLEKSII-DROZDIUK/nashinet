import { Action } from '@ngrx/store';

export namespace CITY_SEO_ACTION {
    export const ADD_NEW_PAGE:string = "ADD_NEW_CITY";
    export const DEL_ONE_PAGE:string = "DEL_ONE_CITY";
};

export class AddSeoPage implements Action {
    readonly type = CITY_SEO_ACTION.ADD_NEW_PAGE

    constructor(public payload:any) {}
};

export class DeleteSeoPage implements Action {
    readonly type =  CITY_SEO_ACTION.DEL_ONE_PAGE;

    constructor(public payload:any) {}
};
