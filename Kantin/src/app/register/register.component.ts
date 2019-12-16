import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHA512 } from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  telepon: string;
  email: string;
  nama_lengkap: string;
  alamat: string;
  tanggal_lahir: string;
  foto: string;
  password: string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }
  register(){
    this.http.post('https://umn-pti2019.herokuapp.com/api/register',{
      "user_name": this.username,
      "telepon": this.telepon,
      "email": this.email,
      "nama_lengkap": this.nama_lengkap,
      "alamat": this.alamat,
      "tanggal_lahir": this.tanggal_lahir,
      "foto": this.foto,
      "password": SHA512(this.password).toString()
    },{
      headers:{
        "Content-Type": "application/json"
      }
    }).subscribe(
      (response) => {
        if(response['token'] != null){
          localStorage.setItem('uas-pti-token', response['token']);
          alert("Anda Berhasil Register!");
          this.router.navigate(['home']);
        }
      },
      (error) => alert(error.error.message)
      )
  }

}
