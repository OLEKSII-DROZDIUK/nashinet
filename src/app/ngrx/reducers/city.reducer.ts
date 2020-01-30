import { Action } from '@ngrx/store';

import { CityInLocationPage } from '../../modules/city-data';

export interface State {
    allCityData:CityInLocationPage[],
    selected: number
}

export const getId = (state: State) => state[state.selected].id;
export const getCities = (state: State) => state.allCityData
export const getSelectedCity = (state: State) => state.selected;  //get index in arr

const initialState: State = {
  allCityData: [
        {
            id:0,
            name:"Kiev",
            rout: "/",
            logo: '/assets/images/city/city_img.svg',
        },
        {
            id:1,
            name:"Drogobich",
            rout: "/drigibuch",
            logo: '/assets/images/city/city_img.svg',
        },
        {
            id: 2,
            name: "Rovno",
            rout: "/rovno",
            logo: '/assets/images/city/city_img.svg',
        }
    ],
    selected: null
};


export function cityReducer(state = initialState, action: Action) {

    switch (action.type) {
        // case ADD_ONE: 
        //     return state;

        // case DEL_ONE:
        //     return state;

        // case SELECT:
        //     return state

        default:
            return state;
    };
};

