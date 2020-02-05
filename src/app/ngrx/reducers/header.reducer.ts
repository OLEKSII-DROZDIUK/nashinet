
import * as HeaderCategory from '../actions/header.action';


export interface State {
    choiceHeaderPage:number
}


const initialState: State = {
  choiceHeaderPage: 0
};


export function headerPageReducer(state = initialState, action: HeaderCategory.HeaderCategory) {

    switch (action.type) {
        case HeaderCategory.HEADER_ACTION.CHANGE_HEADER_PAGE:
            return {...state, choiceHeaderPage:action.payload}
        default:
            return state;
    };
};

