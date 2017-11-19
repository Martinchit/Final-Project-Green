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
    { path : 'account', component: AccountComponent},
    { path : 'street_view', component : MapComponent},
    { path : 'station_point', component: PointComponent},
    { path : 'info', component : InfoComponent},
    { path : 'recycling_bin', component: RecycleComponent},
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
