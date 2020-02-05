import { Action } from '@ngrx/store';
import { SeoPage} from '../../interfaces/seo-page.model';

export enum CITY_SEO_ACTION {
    ADD_NEW_PAGE = "ADD_NEW_SEO-PAGE",
    DEL_ONE_PAGE = "DEL_ONE_SEO-PAGE",
};

export class AddSeoPage implements Action {
    readonly type = CITY_SEO_ACTION.ADD_NEW_PAGE

    constructor(public payload:SeoPage) {}
};

export class DeleteSeoPage implements Action {
    readonly type =  CITY_SEO_ACTION.DEL_ONE_PAGE;

    constructor(public payload:SeoPage[]) {}
};

export type SeoPageActions = AddSeoPage | DeleteSeoPage;