import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService{
    public url: string;

    constructor(
        public _http: HttpClient
    ){
        //this.url = 'http://127.1.1.1/rentaleazy/api/send-mail.php';
        this.url = 'api/send-mail.php';
    }

    send(name: string, phone: string, email: string, message: string): Observable<any>{
        let headers = new HttpHeaders();

        let form = new FormData();
        form.append('name',name);
        form.append('phone',phone);
        form.append('email',email);
        form.append('message',message);

        return this._http.post(this.url, form, {headers: headers});
    }
}
