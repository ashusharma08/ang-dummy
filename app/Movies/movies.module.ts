import { NgModule } from '@angular/core';
import { MoviesRouter } from './movies.routing';
import { MoviesComponent } from './movies.component';

import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../SideBar/sidebar.component';
@NgModule({
    declarations: [MoviesComponent,SideBarComponent],
    imports: [MoviesRouter, CommonModule],
    entryComponents: [MoviesComponent]
}) 

export class MoviesModule{}