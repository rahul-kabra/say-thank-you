import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageRequest } from '../models/MessageRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  readonly baseUrl: string = 'https://saythankyou.cfapps.io';

  constructor(private http: HttpClient) {

  }

  public sendMessage(messageRequest: MessageRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/sendMessage`, messageRequest);
  }

  public fetchQuestionnaire(token: string) {
    return this.http.get(`${this.baseUrl}/fetch?token=${token}`);
  }

  public getMessage(secretCode: string, challengeAnswer: string) {
    return this.http.get(`${this.baseUrl}/getMessage?secretCode=${secretCode}&challengeAnswer=${challengeAnswer}`);
  }
}