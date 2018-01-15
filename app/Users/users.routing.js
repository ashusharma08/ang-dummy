"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var usersLists_component_1 = require("./usersLists.component");
var usersDetails_component_1 = require("./usersDetails.component");
var users_component_1 = require("./users.component");
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    return UsersRoutingModule;
}());
UsersRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild([
                {
                    path: '', component: users_component_1.UsersComponent,
                    children: [
                        { path: '', component: usersLists_component_1.UsersListsComponent },
                        { path: ':id', component: usersDetails_component_1.UsersDetailsComponent }
                    ]
                }
            ])],
        exports: [router_1.RouterModule]
    })
], UsersRoutingModule);
exports.UsersRoutingModule = UsersRoutingModule;
//# sourceMappingURL=users.routing.js.map