"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movies_service_1 = require("../services/movies.service");
var MoviesComponent = (function () {
    function MoviesComponent(moviesService) {
        this.moviesService = moviesService;
        console.log("i am movies constructor");
    }
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("i am movies oninit ");
        this.moviesService.getMoviesList().subscribe(function (resp) { return _this.movieList = resp; }, function (err) { return console.log(err); });
    };
    MoviesComponent.prototype.onClicked = function (value) {
        if (value != '') {
            this.movieList.Movies = this.movieList.Movies.filter(function (x) { return x.Genre.startsWith(value); });
            //this.movieList.Movies.filter(res => res.Genre.startsWith(value));
        }
    };
    return MoviesComponent;
}());
MoviesComponent = __decorate([
    core_1.Component({
        selector: 'movies',
        templateUrl: 'app/Movies/movies.component.html',
        providers: [movies_service_1.MoviesService]
    }),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesComponent);
exports.MoviesComponent = MoviesComponent;
//# sourceMappingURL=movies.component.js.map