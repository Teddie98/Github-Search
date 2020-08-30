import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Github } from './Github';
import {ProfileRequest} from './profile-request';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert } from './sweet-alert';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  // providers: [ GithubService, ProfileRequestService],

  bootstrap: [AppComponent]
})
export class AppModule { }