import { Component, Injectable } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service'
import { MenuService } from "../fw/services/menu.service";
import { initialMenuItems } from "./app.menu";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService, private menuService: MenuService){
      let config: FrameworkConfigSettings = {
        socialIcons: [
          {imageFile: 'assets/social-fb-bw.png', alt: 'facebook', link: 'http://www.facebook.com' },
          {imageFile: 'assets/social-google-bw.png', alt: 'google', link: 'http://www.google.com' },
         {imageFile: 'assets/social-twitter-bw.png', alt: 'twitter', link: 'http://www.twitter.com' }
        ],
        showLanguageSelector: false,
        //showStatusBar: true,
        showStatusBarBreakpoint: 800,
        showUserControls: true
      }
      menuService.items = initialMenuItems;
      frameworkConfigService.configure(config);
      
  }
}
