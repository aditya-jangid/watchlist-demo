import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { WatchListData } from './watchlistdata';

@Injectable({
	providedIn: 'root'
})
export class FetchdataService {

	constructor(private http: HttpClient) { }

	url: string = "http://localhost:3000/MyWatchlist";

	getData() {
		return this.http.get<WatchListData[]>(this.url);
	}

}
