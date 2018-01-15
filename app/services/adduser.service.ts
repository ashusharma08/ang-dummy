import { BaseService } from './base.service';
import { Injectable, ComponentFactoryResolver} from '@angular/core';
import { Http } from '@angular/Http';
import { AddUserComponent } from '../Users/adduser.component';


@Injectable()
export class AddUserService{
    rootViewContainer: any;
    constructor( private factoryResolver: ComponentFactoryResolver) {
    }

    setRootViewContainerRef(viewContainerRef: any) {
        this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent() {
        const factory = this.factoryResolver.resolveComponentFactory(AddUserComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }
}