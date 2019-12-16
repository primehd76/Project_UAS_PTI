import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeFlagService {

  public login_flag = new BehaviorSubject<string>('1');
  public user_name = new BehaviorSubject<string>('');
  flag = this.login_flag.asObservable()
  username = this.user_name.asObservable()
  
  constructor() { }

  changeFlag(flag: string, username: string){
    this.login_flag.next(flag);
    this.user_name.next(username);
  }
  
}
