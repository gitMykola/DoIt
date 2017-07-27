/**
 * Created by Nick on 25.07.2017.
 */
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { MainComponent } from './main/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AboutComponent } from './about/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);