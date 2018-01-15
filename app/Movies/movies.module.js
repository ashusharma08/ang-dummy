"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movies_routing_1 = require("./movies.routing");
var movies_component_1 = require("./movies.component");
var common_1 = require("@angular/common");
var sidebar_component_1 = require("../SideBar/sidebar.component");
var MoviesModule = (function () {
    function MoviesModule() {
    }
    return MoviesModule;
}());
MoviesModule = __decorate([
    core_1.NgModule({
        declarations: [movies_component_1.MoviesComponent, sidebar_component_1.SideBarComponent],
        imports: [movies_routing_1.MoviesRouter, common_1.CommonModule],
        entryComponents: [movies_component_1.MoviesComponent]
    })
], MoviesModule);
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map