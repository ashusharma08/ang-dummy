import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: CoursesComponent }])],
    exports:[RouterModule]
})

export class CoursesRoutingModule{ }