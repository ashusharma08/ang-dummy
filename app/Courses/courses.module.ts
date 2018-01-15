import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses.routing'

@NgModule({
    declarations: [CoursesComponent],
    imports:[CoursesRoutingModule]
})

export class CoursesModule { }