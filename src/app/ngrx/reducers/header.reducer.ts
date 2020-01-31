import { Action } from '@ngrx/store';
import {HEADER_ACTION} from '../actions/header.action';


export interface State {
    choiceHeaderPage:number
}


const initialState: State = {
  choiceHeaderPage: 1
};


export function headerPageReducer(state = initialState, action) {

    switch (action.type) {
        case HEADER_ACTION.CHANGE_HEADER_PAGE:
            return {...state, choiceHeaderPage:action.payload}
        default:
            return state;
    };
};

