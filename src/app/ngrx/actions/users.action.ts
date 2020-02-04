import { Action } from '@ngrx/store';


export namespace USER_ACTION {
    export const ADD_NEW_USER:string = "ADD_NEW_CITY";
    export const DEL_ONE_USER:string = "DEL_ONE_CITY";
}


export class AddUser implements Action {
    readonly type = USER_ACTION.ADD_NEW_USER;
    
    constructor(public payload:Object) {}
};

export class DeleteUser implements Action {
    readonly type = USER_ACTION.DEL_ONE_USER;

    constructor(public payload:Array<any>) {}
};

export type UserActions = AddUser| DeleteUser;