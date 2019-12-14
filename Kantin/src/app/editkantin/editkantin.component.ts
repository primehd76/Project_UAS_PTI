import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editkantin',
  templateUrl: './editkantin.component.html',
  styleUrls: ['./editkantin.component.css']
})
export class EditkantinComponent implements OnInit {

  
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
    public http: HttpClient,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // var id= localStorage.getItem('kode.kantin'); 
    // console.log(id);
  }

  updatekantin(){
    var id= localStorage.getItem('kode.kantin'); 
    console.log(id);
    console.log("put");
    this.http.put('https://umn-pti2019.herokuapp.com/api/kantin/'+id, {
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
