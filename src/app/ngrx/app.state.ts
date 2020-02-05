import { ActionReducerMap } from '@ngrx/store';

import * as City from './reducers/city.reducer';
import * as HeaderCategory from './reducers/header.reducer'
import * as CitySeoPage from './reducers/seo-page.reducer'
import * as User from './reducers/users.reducer'


export interface AppState {
    usersPage: User.State,
    headerPage:HeaderCategory.State,
    citySeoPage: CitySeoPage.State,
    cityPage: City.State,

};

export const reducers: ActionReducerMap<AppState> = {
    usersPage: User.usersReducer,
    headerPage: HeaderCategory.headerPageReducer,
    citySeoPage: CitySeoPage.citySeoPagesReducer,
    cityPage: City.cityReducer,
};
