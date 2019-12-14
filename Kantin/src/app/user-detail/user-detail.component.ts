import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { KantinDetail } from '../_shared/models/Kantin';
import { ChangeFlagService } from '../_shared/services/change-flag.service';

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
    public benderas: ChangeFlagService
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

}
