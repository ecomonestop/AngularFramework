import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import {FwModule} from "../fw/fw.module"

import { AppComponent } from './app.component';
import { FrameworkConfigService } from "../fw/services/framework-config.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from "./app.routing";
import {RouterModule} from "@angular/router"

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
