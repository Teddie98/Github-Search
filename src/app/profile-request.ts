import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { user } from './user';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()

export class ProfileRequest {


  
  fromURL: string = 'https://api.github.com';
  constructor(private http: HttpClient) {
  }

  getUsers(userName: string): Observable<user[]> {
    return this.http.get<user[]>(this.fromURL + '/users/' + userName);

}

}