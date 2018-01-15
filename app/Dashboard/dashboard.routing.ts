import {  RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//import { CoursesComponent } from '../Courses/courses.component';
//import { UsersComponent } from '../Users/users.component';

//const appRoutes: Routes = [
//    { path: '', redirectTo: 'courses', pathMatch: 'full' },
//    { path: 'courses', component: CoursesComponent },
//    {path: 'users', component:UsersComponent }
//]

//export const DashboardRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot([
        { path: '', redirectTo: 'users', pathMatch: 'full' },
        { path: 'users', loadChildren: '../app/Users/users.module#UsersModule' },
        { path: 'courses', loadChildren: '../app/Courses/courses.module#CoursesModule' },
        {path: 'movies', loadChildren:'../app/Movies/movies.module#MoviesModule'}
    ])],
    exports:[RouterModule]
})

export class DashboardRoutingModule{}