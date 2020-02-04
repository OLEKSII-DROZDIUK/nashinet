import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Inject, ChangeDetectorRef, AfterViewInit, OnDestroy} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store'
import { AppState } from '../../ngrx/app.state';

import { DeleteUser, AddUser } from "../../ngrx/actions/users.action";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None
})

export class UsersComponent implements OnInit, AfterViewInit, OnDestroy {
	public usersData: Array<any> = [];
	
	public selectedUserId:string;
	public usersSearchValue: string  = "";
	public usersSearchArray: Array<any> = [];
	public usersSearchOn: boolean = false;

	constructor(@Inject(DOCUMENT) private document: Document,
				private cdRef:ChangeDetectorRef,
				private store: Store<AppState>) {
		
	};

// //////////////////////////////////////////////////////////////////////// LIFE CYCLE
	public ngOnInit(): void {

		this.store.select('usersPage').subscribe(({usersData}) => {  //lisent store
			this.usersData = usersData;
			console.log("USES DATA: ",usersData)
			this.cdRef.detectChanges();
		})
		this.changeSelectUser(this.usersData[0].id); //default its 1st index of array

	}

	public ngAfterViewInit(): void {
		

	};

	public ngOnDestroy(): void {
		
	};

//////////////////////////////////////////////////////////////////////////////////// LIFE CYCLE ENd
	public onSearchUsers(event) {
		this.usersSearchValue = event.target.value;

		const searchStr = (str:string, arr:Array<any>) => {
			arr.map(obj =>{
				if(obj.name.toLowerCase().indexOf(str.toLocaleLowerCase()) === 0) {
					this.usersSearchArray.push(obj);
				};
			});
		};

		if(this.usersSearchValue.length > 2) {
			this.usersSearchOn = true;
			this.usersSearchArray = [];
			searchStr(this.usersSearchValue, this.usersData);
		} else {
			this.usersSearchOn = false;
			this.usersSearchArray = [];
		}
	};

	public addNewUser(event) {
		const id = `f${(+new Date).toString(16)}`;
		this.store.dispatch(new AddUser({id: id, name: "NEW User", logo: "/assets/images/users/default_icon.svg", role: 'customer'}))
	};

	public changeSelectUser(id:string) {
		this.selectedUserId = id;
	};

	public toggleSettingBtn(event) {
		const hasClass = event.target.classList.contains('open');

		if(hasClass) {
			event.target.classList.remove("open");
		} else {
			event.target.classList.add("open");
		}
	};

	public deleteUser(event, userId: string) {

		let filtredUser = this.usersData.filter((arr: any) => {
			if(arr.id !=  userId) return arr
		});

		this.store.dispatch(new DeleteUser(filtredUser))

		this.changeSelectUser(this.usersData[0].id);
	};

};
