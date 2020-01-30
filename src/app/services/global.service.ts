import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalService {

    private currentMenuCategorySubject = new Subject<number>();
    $currentMenuCategory = this.currentMenuCategorySubject.asObservable();

    private selectedCityIdSubject = new Subject<number>();
    $selectedCityId = this.selectedCityIdSubject.asObservable();
    

	constructor() {}
  
    public changeCurentMenuCategory(index:number) {  //change category of menu
       return this.currentMenuCategorySubject.next(index)
    };

    public changeSelectCityG(id:number) { //change city in main-location
        return this.selectedCityIdSubject.next(id);
    };
  
};