import { Component, OnInit } from '@angular/core';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { Kantin } from '../_shared/models/Kantin';
import { ChangeFlagService } from '../_shared/services/change-flag.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public kantin: Kantin = null;
  public flagss: string;

  constructor(
    private pelayanApi: PelayanApiService,
    public bendera: ChangeFlagService
  ) { }

  ngOnInit() {
    this.flagss = (this.bendera.login_flag.value).toString();
    this.pelayanApi.getAllKantin().subscribe(
      result => { this.kantin = result; },
      error => { console.log(error); }
    );
  }

  public selectedIdx = 0;

  selectItem(index):void {
    this.selectedIdx = index;
  }

}
