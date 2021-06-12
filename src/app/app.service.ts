import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

    public stringSubject = new Subject<String>();
    stringMessage = this.stringSubject.asObservable()

    sendmessage(data: String) {
        this.stringSubject.next(data)
    }
}
