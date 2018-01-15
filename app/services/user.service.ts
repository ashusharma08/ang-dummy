import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { UserList } from '../Model/UserList';
import {BaseService} from './base.service';

@Injectable()
export class UserService extends BaseService  {

    //getUsers():Observable<UserList> {
    //    return this.http.get('api/User/GetUserList').map((res: Response) => res.json());
        
    //}

    getUsers(): Observable<UserList> {
        return super.Get('api/User/GetUserList');
    }
    //getUsers(){
    //    return this.http.get('api/User/GetUserList').map(res => res.json()).subscribe(data => console.log(data));
        
    //}
}

