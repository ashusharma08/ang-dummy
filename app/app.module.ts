import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { CoursesComponent } from './Courses/courses.component'
//import { UsersComponent } from './Users/users.component';
import {DashboardComponent} from './Dashboard/dashboard.component'
//import { APP_BASE_HREF } from '@angular/common'
import { DashboardRoutingModule } from './Dashboard/dashboard.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//import { SideBarComponent } from './SideBar/sidebar.component';
//{ provide: APP_BASE_HREF, useValue: '/' },

@NgModule({
    imports: [ReactiveFormsModule, HttpModule, BrowserModule, DashboardRoutingModule],
    declarations: [AppComponent, DashboardComponent],//,SideBarComponent],// CoursesComponent, UsersComponent  ],
    providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:[AppComponent]
})


export class AppModule{}