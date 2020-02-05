
import * as CityActions from '../actions/city.action';
import { City } from '../../interfaces/city.model';

export interface State {
    allCityData:City[],
    loading: boolean,
    error: Error
};


const initialState: State = {
  allCityData: [

    ],
    loading: false,
    error: undefined,
};


export function cityReducer(state = initialState, action:CityActions.CityActions ) {
    

    switch (action.type) {
        case CityActions.CITY_ACTION.LOAD_CITIES:
            return {
                ...state,
                loading: true
            }
        case CityActions.CITY_ACTION.LOAD_CITIES_SUCCESS:
            
            return {
                ...state,
                allCityData: action.payload,
                loading: false,
            }
        case CityActions.CITY_ACTION.LOAD_CITIES_FAIL:
            return {
                ...state,
                loading: false, 
                error: action.payload,
            }

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

