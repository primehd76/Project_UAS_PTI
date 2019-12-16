import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SHA512 } from 'crypto-js';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  nama_lengkap: string;
  alamat: string;
  tanggal_lahir: string;
  foto: string;
  password: string;
  token: string;
  
  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

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

  ngOnInit() {
    // this.token = localStorage.getItem('uas-pti-token');
    // this.http.post('https://umn-pti2019.herokuapp.com/api/verify', {
    //   "token": this.token 
    // }, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": "Bearer " + localStorage.getItem('uas-pti-token')        
    //     }
    // }).subscribe(
    //   (response) => {
    //     console.log("Berhasil Verif");   
    //   },
    //   (error) => alert(error.error.message)
    // )
    this.auth();
  }

  update(){
    this.http.put('https://umn-pti2019.herokuapp.com/api/update', {
      "nama_lengkap": this.nama_lengkap,
      "alamat": this.alamat,
      "tanggal_lahir": this.tanggal_lahir,
      "foto": this.foto,
      "password": SHA512(this.password).toString(),
      "token": localStorage.getItem('uas-pti-token')
    }, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem('uas-pti-token'),
          "Authorization": "Bearer" + localStorage.getItem('uas-pti-token')            
        }
    }).subscribe(
      (response) => {
        alert("Berhasil Edit Profile");
        this.router.navigate(['home']);
      },
      (error) => alert(error.error.message)
    )
  }

}
