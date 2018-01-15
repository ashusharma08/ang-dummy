import { Component, ViewContainerRef } from '@angular/core';
import { AddUserService } from '../services/adduser.service';


@Component({
    template: `<h1>Something Something</h1>`,
    providers: [AddUserService]
})

export class UsersDetailsComponent{
    constructor(private addUserService: AddUserService, private contRef: ViewContainerRef) {
        addUserService.setRootViewContainerRef(contRef);
        addUserService.addDynamicComponent();
    }

}