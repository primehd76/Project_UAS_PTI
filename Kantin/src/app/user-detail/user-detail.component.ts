import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { KantinDetail } from '../_shared/models/Kantin';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public kantin: KantinDetail;

  constructor(
    private pelayanApi: PelayanApiService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  var id= this.activatedRoute.snapshot.params.kode; 
    console.log(id);

    this.pelayanApi.getKantinById(id).subscribe(
      result => { this.kantin = result; console.log(this.kantin);},
      error => { console.log(error); }
    );
  }

}
