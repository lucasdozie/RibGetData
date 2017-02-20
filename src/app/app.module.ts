import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { UserDetailsPage } from '../pages/user-details/user-details';

import { GithubUsers } from '../providers/github-users';
//import { OrganizationPage } from '../pages/organization/organization';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ReposPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    ReposPage,
    UserDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GithubUsers]
})
export class AppModule {}
