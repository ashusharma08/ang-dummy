import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';  
import { UsersListsComponent } from './usersLists.component';
import { FormsModule } from '@angular/forms';

import { UsersDetailsComponent } from './usersDetails.component';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './adduser.component';

@NgModule({
    imports: [UsersRoutingModule, CommonModule, FormsModule],
    declarations: [UsersComponent, UsersListsComponent, UsersDetailsComponent,AddUserComponent],
    entryComponents:[AddUserComponent]

})

export class UsersModule{}