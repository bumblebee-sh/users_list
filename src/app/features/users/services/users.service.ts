import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private readonly http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/data/users-data.ts`);
  }
}
