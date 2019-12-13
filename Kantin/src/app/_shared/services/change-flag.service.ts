import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeFlagService {
  public login_flag = new BehaviorSubject<string>('1');
  flag = this.login_flag.asObservable()
  
  constructor() { }

  changeFlag(flag: string){
    this.login_flag.next(flag);

  }
}
