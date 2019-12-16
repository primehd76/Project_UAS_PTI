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

  auth(){
    this.http.post('https://umn-pti2019.herokuapp.com/api/verify',{
      "token": localStorage.getItem("uas-pti-token")
    },{
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("uas-pti-token"),
          "Authorization": "Bearer "+localStorage.getItem("uas-pti-token")
        }
    }).subscribe(
      (response) => {
        if(response['result'] != null){
          localStorage.setItem('user.name',response['result'].user.user_name);
          localStorage.setItem('telepon',response['result'].user.telepon);
          localStorage.setItem('alamat',response['result'].user.alamat);
          localStorage.setItem('email',response['result'].user.email);
          localStorage.setItem('nama.lengkap',response['result'].user.nama_lengkap);
          localStorage.setItem('tanggal.lahir',response['result'].user.tanggal_lahir);
          localStorage.setItem('foto',response['result'].user.foto);
        }
      },
      (error) => alert(error.error.message)
    )
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
          this.flags.changeFlag(this.flagsss, this.username);
          console.log(this.flagsss);
          this.auth();
          this.router.navigate(['home']);
        }
      },
      (error) => alert(error.error.message)
      )
  }
  
}
