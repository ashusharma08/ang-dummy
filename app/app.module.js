"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
//import { CoursesComponent } from './Courses/courses.component'
//import { UsersComponent } from './Users/users.component';
var dashboard_component_1 = require("./Dashboard/dashboard.component");
//import { APP_BASE_HREF } from '@angular/common'
var dashboard_routing_1 = require("./Dashboard/dashboard.routing");
var common_1 = require("@angular/common");
//import { SideBarComponent } from './SideBar/sidebar.component';
//{ provide: APP_BASE_HREF, useValue: '/' },
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.ReactiveFormsModule, http_1.HttpModule, platform_browser_1.BrowserModule, dashboard_routing_1.DashboardRoutingModule],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map