import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addkantin',
  templateUrl: './addkantin.component.html',
  styleUrls: ['./addkantin.component.css']
})
export class AddkantinComponent implements OnInit {

 kode: string
 nama: string
 kategori: string
 foto: string
 deskripsi: string
 harga: number
 cash: string
 gopay: string
 ovo: string
 dana: string



  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addkantin(){
      console.log(this.kode);
      console.log(this.nama);
      console.log(this.kategori);
      console.log(this.foto);
      console.log(this.deskripsi);
      console.log(this.harga);
      console.log(this.cash);
      console.log(this.dana);
      console.log(this.ovo);
      console.log(this.gopay);
    this.http.post('https://umn-pti2019.herokuapp.com/api/kantin',{
      "kode": this.kode,
      "nama": this.nama,
      "kategori": this.kategori,
      "foto": this.foto,
      "deskripsi": this.deskripsi,
      "harga": this.harga,
      "cash": this.cash,
      "gopay": this.gopay,
      "ovo": this.ovo,
      "dana": this.dana,
      "token": localStorage.getItem('uas-pti-token')
    }, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem('uas-pti-token'),
        "Authorization": "Bearer" + localStorage.getItem('uas-pti-token')            
      }
  }).subscribe(
    (response) => {
      this.router.navigate(['home']);
    },
  
    (error) => alert(error.error.info)
  )
}

}