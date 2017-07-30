import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import {FwModule} from "../fw/fw.module"

import { AppComponent } from './app.component';
import { FrameworkConfigService } from "../fw/services/framework-config.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from "./app.routing";
import {RouterModule} from "@angular/router";
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component'
import { UserService } from "./services/user.service";
import{UserApi} from "../fw/users/user.api";
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
   providers: [
    AuthGuard,
    UserService,
    {provide: UserApi, useExisting: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
