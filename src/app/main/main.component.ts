/**
 * Created by Nick on 25.07.2017.
 */
import { Component, OnInit } from '@angular/core';

import { User, Marker } from '../_models/index';
import { UserService, MarkerService } from '../_services/index';
import { AuthenticationService } from '../_services/index';

import {DG} from '2gis-maps';

@Component({
    moduleId: module.id,
    templateUrl: 'main.component.html'
})

export class MainComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    markers: Marker[] = [];
    categories: any = [];
    model: any = {};
    map: any = {};
    dg: DG;

    constructor(private userService: UserService,
                private markerService: MarkerService,
                private authenticationService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.categories = ['pharmacies', 'gas', 'schools', 'restaurants'];
    }

    ngOnInit() {
        this.loadAllMarkers();
        // this.loadAllUsers();
        /*
        console.dir(this.dg);
            this.map = this.dg.map('map', {
                center: [46.431885, 30.746817],
                zoom: 10,
                geoclicker: false,
                draggin: true
            });*/
    }

    logout() {
        this.authenticationService.logout();
        // this.router.navigate('/home');
    }
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }
    private loadAllMarkers() {
        this.markerService.getAll(this.currentUser._id).subscribe(markers => { this.markers = markers; });
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
