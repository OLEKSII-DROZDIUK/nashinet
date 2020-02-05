
import { SeoPage } from '../../interfaces/seo-page.model'
import * as SeoPageActions from '../actions/seo-page.action';

export interface State {
    citySeoPages:SeoPage[],
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


export function citySeoPagesReducer(state = initialState, action:SeoPageActions.SeoPageActions) {

    switch (action.type) {
        case SeoPageActions.CITY_SEO_ACTION.ADD_NEW_PAGE: 
            return {
                ...state, citySeoPages:[...state.citySeoPages, action.payload]
            }
        default:
            return state;
    };
};

