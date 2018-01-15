import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    template: `This is dashboard. Push play stop rewind
                <a routerLink='/courses'>Courses</a>
                <a routerLink='/users'>Users</a>
                <a routerLink='/movies'>Movies</a>

                <router-outlet></router-outlet>
               `
})

export class DashboardComponent{}