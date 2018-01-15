"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
//import { CoursesComponent } from '../Courses/courses.component';
//import { UsersComponent } from '../Users/users.component';
//const appRoutes: Routes = [
//    { path: '', redirectTo: 'courses', pathMatch: 'full' },
//    { path: 'courses', component: CoursesComponent },
//    {path: 'users', component:UsersComponent }
//]
//export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'users', pathMatch: 'full' },
                { path: 'users', loadChildren: '../app/Users/users.module#UsersModule' },
                { path: 'courses', loadChildren: '../app/Courses/courses.module#CoursesModule' },
                { path: 'movies', loadChildren: '../app/Movies/movies.module#MoviesModule' }
            ])],
        exports: [router_1.RouterModule]
    })
], DashboardRoutingModule);
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=dashboard.routing.js.map