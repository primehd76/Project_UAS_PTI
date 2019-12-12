import { Component, OnInit } from '@angular/core';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { Kantin } from '../_shared/models/Kantin';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public kantin: Kantin = null;

  constructor(
    private pelayanApi: PelayanApiService
  ) { }

  ngOnInit() {
    this.pelayanApi.getAllKantin().subscribe(
      result => { this.kantin = result; console.log(this.kantin);},
      error => { console.log(error); }
    );
  }

}
