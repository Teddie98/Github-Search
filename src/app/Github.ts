import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { repos } from './repos';
import { Observable } from 'rxjs';
@Injectable()






export class github {

    
    baseURL: string = 'https://api.github.com';
    constructor(private http: HttpClient) {
    }

    getRepos(userName: string): Observable<repos[]> {
        return this.http.get<repos[]>(this.baseURL + '/users/' + userName + '/repos');
    }
}
