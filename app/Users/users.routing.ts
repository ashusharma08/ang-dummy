import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { UsersListsComponent } from './usersLists.component';
import { UsersDetailsComponent } from './usersDetails.component';
import { UsersComponent} from './users.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '', component: UsersComponent,
            children:[
                { path: '', component: UsersListsComponent },
                { path: ':id', component: UsersDetailsComponent }
            ]
        }
        
    ])],
    exports:[RouterModule]
})

export class UsersRoutingModule{}