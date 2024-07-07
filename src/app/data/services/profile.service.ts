import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public http: HttpClient = inject(HttpClient);

  public baseApiUrl: string = 'https://icherniakov.ru/yt-course/';

  public getTestAccounts(): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseApiUrl}account/test_accounts`);
  }
}
