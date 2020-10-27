import { Component, OnInit } from '@angular/core';
import { FetchdataService } from './fetchdata.service';
import { WatchListData } from './watchlistdata';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'watchlist-demo';
	constructor(private fd: FetchdataService) { }

	columns = ["COMPANY", "MARKET PRICE", "CLOSE PRICE", "MARKET CAP (CR)"];

	tabledata : WatchListData[] = [];

	currentCompanyName : string = '';

	faUserFriends = faUserFriends;

	ngOnInit(): void {
		this.fd.getData().subscribe
			(
				(response) => {
					this.tabledata = response;
					// console.log(response);
				},

				(error) => {
					console.log("Error Occured : " + error);
				}
			)
	}
	onClick(companyName){
		this.currentCompanyName = companyName;
		// console.warn('CURR :' + this.currentCompanyName);
	}

}
