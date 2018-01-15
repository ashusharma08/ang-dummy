import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';
import { MoviesList } from '../Model/MoviesList';

@Injectable()
export class MoviesService extends BaseService{
    getMoviesList(): Observable<MoviesList> {
        return super.Get('api/Movies/GetMoviesList');
    }
}