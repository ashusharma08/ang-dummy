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
var adduser_service_1 = require("../services/adduser.service");
var UsersDetailsComponent = (function () {
    function UsersDetailsComponent(addUserService, contRef) {
        this.addUserService = addUserService;
        this.contRef = contRef;
        addUserService.setRootViewContainerRef(contRef);
        addUserService.addDynamicComponent();
    }
    return UsersDetailsComponent;
}());
UsersDetailsComponent = __decorate([
    core_1.Component({
        template: "<h1>Something Something</h1>",
        providers: [adduser_service_1.AddUserService]
    }),
    __metadata("design:paramtypes", [adduser_service_1.AddUserService, core_1.ViewContainerRef])
], UsersDetailsComponent);
exports.UsersDetailsComponent = UsersDetailsComponent;
//# sourceMappingURL=usersDetails.component.js.map