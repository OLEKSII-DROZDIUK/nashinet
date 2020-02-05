import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects"
import { LoadCitiesAction, CITY_ACTION, LoadCitiesSuccessAction, LoadCitiesFailAction } from "../actions/city.action";
import { ApiService } from "../../services/api.service";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class CityEffects {

    @Effect() loadCities$ = this.actions$
        .pipe(
            ofType<LoadCitiesAction>(CITY_ACTION.LOAD_CITIES),
            mergeMap(
                () => this.api.getAllCities()
                    .pipe(
                        map(cities=> {
                            return new LoadCitiesSuccessAction(cities)
                        }),
                        catchError( error => of(new LoadCitiesFailAction(error)))
                )
            )
        );
    
    constructor(
        private actions$: Actions,
        private api: ApiService ) {}
};