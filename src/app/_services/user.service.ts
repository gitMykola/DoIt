/**
 * Created by Nick on 25.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    private host = 'http://178.20.156.221:3031';//'http://localhost:3031'; // 'http://178.20.156.221:3031';
    getAll() {
        return this.http.get(this.host + '/users/api', this.hd()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.host + '/users/api' + id, this.hd()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.host + '/users/api', user, this.hd()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this.host + '/users/api/' + user._id, user, this.hd()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.host + '/users/api/' + id, this.hd()).map((response: Response) => response.json());
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
