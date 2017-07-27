/**
 * Created by Nick on 25.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(useremail: string, password: string) {
        const header = new Headers({ 'Authorization': 'Basic ' + useremail + ':' + password });
        const host = 'http://localhost:3031';
        return this.http.post(host + '/auth/api', {}, { headers: header })
            .map((response: Response) => {
                // login successful if ...
                const user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser !== null) {
            const header = new Headers({'Authorization': 'Basic ' + currentUser.email + ':' + currentUser.pwd});
            const host = 'http://localhost:3031';
            this.http.post(host + '/auth/api/logout', {}, {headers: header})
                .subscribe(data => {
                    // logout successful if ...
                    const msg = data['msg'];
                    console.log(msg);
                    // remove user from local storage to log user out
                    localStorage.removeItem('currentUser');
                });
        }
    }
}
