import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PointComponent } from './point/point.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AuthGuardService } from './auth-guard.service';
import { RecycleComponent } from './recycle/recycle.component';

const routes: Routes = [
    { path : '', redirectTo: '/home', pathMatch: 'full'},
    { path : 'home', component: HomeComponent},
    { path : 'login', component: LoginComponent},
    { path : 'account', component: AccountComponent, canActivate: [AuthGuardService]},
    { path : 'street_view', component : MapComponent, canActivate: [AuthGuardService]},
    { path : 'station_point', component: PointComponent, canActivate: [AuthGuardService]},
    { path : 'info', component : InfoComponent, canActivate: [AuthGuardService]},
    { path : 'recycling_bin', component: RecycleComponent, canActivate: [AuthGuardService]},
    { path : '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [ MapComponent, InfoComponent, PageNotFoundComponent, HomeComponent, PointComponent, LoginComponent, AccountComponent, RecycleComponent ];
