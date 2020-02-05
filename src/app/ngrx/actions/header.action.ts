import { Action } from '@ngrx/store';

export enum HEADER_ACTION {
    CHANGE_HEADER_PAGE = "CHANGE_HEADER_PAGE",
    ADD_HEADER_PAGE = "ADD_HEADER_PAGE",
}


export class ChangeHeaderPage implements Action {
    readonly type = HEADER_ACTION.CHANGE_HEADER_PAGE;

    constructor(public payload:number) {}
};

export class AddHeaderPage implements Action {
    readonly type = HEADER_ACTION.ADD_HEADER_PAGE;

    constructor(public payload:number) {}
};


export type HeaderCategory = AddHeaderPage | ChangeHeaderPage;