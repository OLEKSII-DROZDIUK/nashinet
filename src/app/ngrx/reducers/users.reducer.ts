import { Action } from '@ngrx/store';
import * as UserActions from '../actions/users.action';

export interface State {
    usersData:Array<any>,
};


const initialState: State = {
    usersData: [
        {
            id:"f16ff6312333",
            name:"Vasia Ivanov",
            logo: '/assets/images//users/default_icon.svg',
            role: 'customer',
        },
        {
            id:"f16ff6f81111d1bd",
            name:"Kumis Petrov",
            logo: '/assets/images/users/default_icon.svg',
            role: "administrator",
        },
        {
            id: "f16fffff6f8d40d",
            name: "Sonka gold-hend",
            logo: '/assets/images/users/default_icon.svg',
            role: "content-manager",
        }
    ],
};


export function usersReducer(state = initialState, action: UserActions.UserActions) {

    switch (action.type) {
        case UserActions.USER_ACTION.ADD_NEW_USER: 
            return {
                ...state, usersData:[...state.usersData, action.payload]
            }
        case UserActions.USER_ACTION.DEL_ONE_USER:
            return {...state, usersData:action.payload}

        default:
            return state;
    };
};

