import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MoviesList } from '../Model/MoviesList';

@Component({
    selector: 'movies',
    templateUrl: 'app/Movies/movies.component.html',
    providers: [MoviesService]
})

export class MoviesComponent implements OnInit{
    movieList: MoviesList;
    constructor(private moviesService: MoviesService) { console.log("i am movies constructor"); }

    ngOnInit() {
        console.log("i am movies oninit ");
        this.moviesService.getMoviesList().subscribe(
            (resp: MoviesList) => this.movieList = resp,
            err => console.log(err))
    }

    onClicked(value: string) {
        if (value != '') {
            this.movieList.Movies = this.movieList.Movies.filter(x => x.Genre.startsWith(value));
                //this.movieList.Movies.filter(res => res.Genre.startsWith(value));
        }
    }
}