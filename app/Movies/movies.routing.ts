import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoviesComponent } from '../Movies/movies.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path:'', component: MoviesComponent
        }
    ])],
    exports:[RouterModule]
})

export class MoviesRouter{}