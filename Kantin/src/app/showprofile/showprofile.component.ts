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

  ngOnInit() {
    this.token = localStorage.getItem('uas-pti-token')
    var decode = jwt_decode(this.token);

    this.username = decode.user.user_name;
    this.telepon = decode.user.telepon;
    this.email = decode.user.email;
    this.namalengkap = decode.user.nama_lengkap;
    this.alamat = decode.user.alamat;
    this.tanggallahir = decode.user.tanggal_lahir;
    this.foto = decode.user.foto;
    
   }
}
