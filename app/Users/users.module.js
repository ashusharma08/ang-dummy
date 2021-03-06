"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users_component_1 = require("./users.component");
var users_routing_1 = require("./users.routing");
var usersLists_component_1 = require("./usersLists.component");
var forms_1 = require("@angular/forms");
var usersDetails_component_1 = require("./usersDetails.component");
var common_1 = require("@angular/common");
var adduser_component_1 = require("./adduser.component");
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [users_routing_1.UsersRoutingModule, common_1.CommonModule, forms_1.FormsModule],
        declarations: [users_component_1.UsersComponent, usersLists_component_1.UsersListsComponent, usersDetails_component_1.UsersDetailsComponent, adduser_component_1.AddUserComponent],
        entryComponents: [adduser_component_1.AddUserComponent]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map