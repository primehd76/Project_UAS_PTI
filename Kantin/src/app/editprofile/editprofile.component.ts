import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  
  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
  }

  update(){
    console.log("ajg");
    this.http.put('https://umn-pti2019.herokuapp.com/api/update', {
      "nama_lengkap": this.nama_lengkap,
      "alamat": this.alamat,
      "tanggal_lahir": this.tanggal_lahir,
      "foto": this.foto,
      "password": this.password,
      "token": localStorage.getItem("uas-pti-token")
    }, {
        headers: {
          "Content-Type": "application/json"
        }
    }).subscribe(
      (response) => {
        if(response['token'] != null){
          localStorage.setItem('uas-pti-token', response['token']);
          this.router.navigate(['home']);
        }
      },
      
      (error) => {console.log(localStorage); alert(error.error.info)}
    )
  }

}
