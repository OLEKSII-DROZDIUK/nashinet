import { Action } from '@ngrx/store';

import { CITY_SEO_ACTION} from '../actions/seo-page.action';

export interface State {
    citySeoPages: any,
};

const initialState: State = {   //its mean if i take all page from server by id City, and we have list of page/
    citySeoPages: [   
        {
            id:"dasdasds23",
            name:"Page name for universal admin for client",
            rout: "/lala/kkk",
            status: "published",
        },
        {
            id:"dasdasds2993",
            name:"Page name for universal admin for client",
            rout: "/lala1/xyz",
            status: "published",
        },
        {
            id:"fsdasdad3333",
            name:"Page name for universal admin for client",
            rout: "/lalal/2oooo",
            status: "archive",
        },
        {
            id: "asdasdas",
            name: "Page name for universal admin for client",
            rout: "/lala/ggg",
            status: "active",
        }
    ],
};


export function citySeoPagesReducer(state = initialState, action) {

    switch (action.type) {
        case CITY_SEO_ACTION.ADD_NEW_PAGE: 
            return {
                ...state, citySeoPages:[...state.citySeoPages, action.payload]
            }
        // case CITY_ACTION.DEL_ONE_CITY:
        //     return {...state, allCityData:action.payload}

        default:
            return state;
    };
};

