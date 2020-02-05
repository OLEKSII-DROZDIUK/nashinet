
import * as CityActions from '../actions/city.action';
import { City } from '../../interfaces/city.model';

export interface State {
    allCityData:City[],
};


const initialState: State = {
  allCityData: [
        {
            id:"f16ff6f8cb7d",
            name:"Kiev",
            rout: "/",
            logo: '/assets/images/city/city_img.svg',
            published: false,
        },
        {
            id:"f16ff6f8d1bd",
            name:"Drogobich",
            rout: "/drigibuch",
            logo: '/assets/images/city/city_img.svg',
            published: false,
        },
        {
            id: "f16ff6f8d40d",
            name: "Rovno",
            rout: "/rovno",
            logo: '/assets/images/city/city_img.svg',
            published: false,
        }
    ],
};


export function cityReducer(state = initialState, action:CityActions.CityActions ) {

    switch (action.type) {
        case CityActions.CITY_ACTION.ADD_NEW_CITY: 
            return {
                ...state, allCityData:[...state.allCityData, action.payload]
            }
        case CityActions.CITY_ACTION.DEL_ONE_CITY:
            return {...state, allCityData:action.payload}

        default:
            return state;
    };
};

