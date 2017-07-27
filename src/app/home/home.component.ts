/**
 * Created by Nick on 25.07.2017.
 */
import { Component, OnInit } from '@angular/core';

import { User, Marker } from '../_models/index';
import { MarkerService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    markers: Marker[] = [];
    returnUrl: string;

    constructor(private markerService: MarkerService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }

    ngOnInit() {
        console.log('init Home');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
        // this.loadMarkers();
    }

    private loadMarkers() {
        this.markerService.getAll(this.currentUser._id).subscribe(markers => { this.markers = markers; });
    }
}
