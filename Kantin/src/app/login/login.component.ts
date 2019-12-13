import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';
import { Router } from '@angular/router';
import { User } from '../_shared/models/user';
import { ChangeFlagService } from '../_shared/services/change-flag.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string;
  password: string;
  remember_me: boolean;
  public login_flag: User;
  flagsss: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private flags: ChangeFlagService
  ) { }

  ngOnInit() {
    this.flags.flag.subscribe(result => {
        this.flagsss = result;
    });
  }


  login(){
    this.http.post('https://umn-pti2019.herokuapp.com/api/login',{
        "user_name": this.username,
        "password": SHA512(this.password).toString(),
        "remember_me": this.remember_me
    }).subscribe(
      (response) => {
        if(response['token'] != null){
          localStorage.setItem('uas-pti-token', response['token']);
          this.flagsss = '0';
          this.flags.changeFlag(this.flagsss);
          console.log(this.flagsss);

          this.router.navigate(['home']);
        }
      },
      (error) => alert(error.error.message)
      )
  }
}
