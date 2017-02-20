import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationPage } from '../pages/organization/organization';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
   //rootPage = TabsPage;
  rootPage: any = UsersPage;
  //pages: Array<{public platform: platform, public menu: MenuController}>
  pages: Array<{title: string, component: any}>


  constructor(platform: Platform, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    this.pages = [
      {title: 'Users', component: UsersPage},
      {title: 'Repos', component: ReposPage}
    ];
  }
  openPage(page){
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
