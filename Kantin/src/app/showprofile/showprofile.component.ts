import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.component.html',
  styleUrls: ['./showprofile.component.css']
})
export class ShowprofileComponent implements OnInit {

  private token: string
  public username: string
  public telepon: string
  public email: string
  public namalengkap: string
  public alamat: string
  public tanggallahir: string
  public foto: string

  constructor(
    private http: HttpClient
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
          this.username = localStorage.getItem('user.name');
          this.telepon = localStorage.getItem('telepon');
          this.alamat = localStorage.getItem('alamat');
          this.email = localStorage.getItem('email');
          this.namalengkap = localStorage.getItem('nama.lengkap');
          this.tanggallahir = localStorage.getItem('tanggal.lahir');
          this.foto = localStorage.getItem('foto'); 
        }
      },
      (error) => { console.log(error); }
    )
  }

  ngOnInit() {
    this.auth();
  }

}
