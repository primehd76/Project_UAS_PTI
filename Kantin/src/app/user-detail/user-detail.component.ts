import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { KantinDetail } from '../_shared/models/Kantin';
import { ChangeFlagService } from '../_shared/services/change-flag.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public kantin: KantinDetail;
  public flagsss: string;

  constructor(
    private pelayanApi: PelayanApiService,
    public activatedRoute: ActivatedRoute,
    public benderas: ChangeFlagService,
    public http: HttpClient,
    public router: Router
  ) { }

  ngOnInit() {
    var id= this.activatedRoute.snapshot.params.kode; 
    this.flagsss = (this.benderas.login_flag.value).toString();
    console.log(id);
    localStorage.setItem('kode.kantin', id);
    console.log(localStorage.getItem('kode.kantin'));
    this.pelayanApi.getKantinById(id).subscribe(
      result => { this.kantin = result; console.log(this.kantin);},
      error => { console.log(error); }
    );
  }

  favorite(){
    this.http.post('https://umn-pti2019.herokuapp.com/api/add-favorites',{
      "type": "kantin",
      "id_kode_nim_isbn_favorited": localStorage.getItem('kode.kantin'),
      "token": localStorage.getItem('uas-pti-token')
    },{
      headers:{
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem('uas-pti-token'),
        "Authorization": "Bearer" + localStorage.getItem('uas-pti-token')   
      }
    }).subscribe(
      (response) => {
        alert("Kantin Favorited");
      },
    
      (error) => alert(error.error.info)
    )
  }

  unfavorite(){
    this.http.put('https://umn-pti2019.herokuapp.com/api/delete-favorites',{
      "type": "kantin",
      "id_kode_nim_isbn_favorited": localStorage.getItem('kode.kantin'),
      "token": localStorage.getItem('uas-pti-token')
    },{
      headers:{
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem('uas-pti-token'),
        "Authorization": "Bearer" + localStorage.getItem('uas-pti-token')   
      }
    }).subscribe(
      (response) => {
        alert("Kantin UnFavorited");
      },
    
      (error) => alert(error.error.info)
    )
  }

}
