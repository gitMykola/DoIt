/**
 * Created by Nick on 25.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Marker } from '../_models/index';

@Injectable()
export class MarkerService {
    constructor(private http: Http) { }
    private host = 'http://178.20.156.221:3031';//'http://localhost:3031'; // 'http://178.20.156.221:3031';
    getAll(userId: number) {
        return this.http.get(this.host + '/markers/api/' + userId, this.hd()).map((response: Response) => response.json());
    }
    saveAll(userId: number) {
        return this.http.post(this.host + '/markers/api/' + userId, this.hd()).map((response: Response) => response.json());
    }

    deleteAll(id: number) {
        return this.http.delete(this.host + '/markers/api/' + id, this.hd()).map((response: Response) => response.json());
    }

    // private helper methods

    private hd() {
        // create authorization header
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            const headers = new Headers({ 'Authorization': 'Basic ' + currentUser.email + ':' + currentUser.pwd });
            return new RequestOptions({ headers: headers });
        }
    }
}