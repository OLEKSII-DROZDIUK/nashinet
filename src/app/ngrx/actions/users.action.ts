import { Action } from '@ngrx/store';
import { User } from '../../interfaces/user.model';

export enum USER_ACTION {
    ADD_NEW_USER = "ADD_NEW_USER",
    DEL_ONE_USER = "DEL_ONE_USER",
}


export class AddUser implements Action {
    readonly type = USER_ACTION.ADD_NEW_USER;
    
    constructor(public payload:User) {}
};

export class DeleteUser implements Action {
    readonly type = USER_ACTION.DEL_ONE_USER;

    constructor(public payload:User[]) {}
};

export type UserActions = AddUser| DeleteUser;