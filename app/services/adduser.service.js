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
var adduser_component_1 = require("../Users/adduser.component");
var AddUserService = (function () {
    function AddUserService(factoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    AddUserService.prototype.setRootViewContainerRef = function (viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    };
    AddUserService.prototype.addDynamicComponent = function () {
        var factory = this.factoryResolver.resolveComponentFactory(adduser_component_1.AddUserComponent);
        var component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    };
    return AddUserService;
}());
AddUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], AddUserService);
exports.AddUserService = AddUserService;
//# sourceMappingURL=adduser.service.js.map