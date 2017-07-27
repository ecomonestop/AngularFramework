import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import {FwModule} from "../fw/fw.module"

import { AppComponent } from './app.component';
import { FrameworkConfigService } from "../fw/services/framework-config.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
