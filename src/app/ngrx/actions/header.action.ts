import { Action } from '@ngrx/store';

export namespace HEADER_ACTION {
    export const CHANGE_HEADER_PAGE:string = "CHANGE_HEADER_PAGE";
}


export class ChangeHeaderPage implements Action {
    readonly type = HEADER_ACTION.CHANGE_HEADER_PAGE;

    constructor(public payload:number) {}
};
