import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';

import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { routingComponents } from './app-routing.module';
import { AUTHService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { FacebookService } from './facebook.service';
import { FilterDistrictPipe } from './filter-district.pipe';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1936639086587896')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterDistrictPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdQiwN7LzuD1fXwJ7zQsxBp0-Os5f_q-g'
    }),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [ServerService, AUTHService, AuthGuardService, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }, FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
