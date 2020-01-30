// import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';

// import * as fromCity from './city.reducer';

// export interface State {
//     allCityData: fromCity.State;
// }

// export const reducers: ActionReducerMap<State> = {
//     allCityData: fromCity.cityReducer
// };

// export function logger(reducer: ActionReducer<State>):
//     ActionReducer<State> {

//         return function (state: State, action: any): State {
//             console.log('state', state);
//             console.log('action', action);
//             return reducer(state, action);
//     };
// }

// export const metaReducers: MetaReducer<State>[] = [logger];

// /////
// export const getCityState = 
//     createFeatureSelector<fromCity.State>('allCityData');

// export const getId = createSelector(
//     getCityState,
//     fromCity.getId,
// );

// export const getCities = createSelector(
//     getCityState,
//     fromCity.getCities,
// );

// export const getSelected = createSelector(
//     getCityState,
//     fromCity.getSelectedCity,
// );

// export const getSelectedCity = createSelector(
//     getSelected,
//     getCities,
//     (selectedId, cities) => {
//         return {
//             ...cities[selectedId]
//         };
//     }
// );

// export const getAllCities = createSelector(
//     getId,
//     getCities,
//     (id, cities) => {
//         return id.map(id => cities[id]);
//     }
// );