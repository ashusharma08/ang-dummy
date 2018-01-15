import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable} from '@angular/core'
import 'rxjs/add/operator/map'

@Injectable()
export class BaseService {
    constructor(private http:Http){}

    public Get(url: string):Observable<any> {
        return this.http.get(url).map(
            (resp: Response) => resp.json()
        );
    }

}