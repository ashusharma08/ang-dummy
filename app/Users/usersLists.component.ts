import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserList } from '../Model/UserList';

@Component({
    template: `<div>
                    <ul>
                        <li *ngFor="let user of userList let i = index"(click)="onSelect(user)">
                            <span>index: {{i+1}}</span>
                            <span>name: {{user.Name}}</span>
                        </li>
                    </ul>
              </div>`,
    providers: [UserService]

})

export class UsersListsComponent {
    userList: any;

    constructor(private router: Router, private userService: UserService) {
       
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            (resp: UserList) => { this.userList = resp.Users },
            err => { console.log(err) });
        //this.getUsers()
    }

    

    getUsers() {
        //this.userService.getUsers().subscribe((res: UserList) => console.log(res.Users));

        //this.userService.getUsers().subscribe(
        //    (user: UserList) => this.userList = user,
        //    err => { console.log(err) });

       
    }

    //private Users = [
    //    this.http.Get('api/user/GetUserList');
    //];

    onSelect(user:any) { this.router.navigate(['/users', user.id])};
}