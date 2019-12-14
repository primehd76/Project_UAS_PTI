import { Component, OnInit } from '@angular/core';
import { Kantin, KantinFavorite } from '../_shared/models/Kantin';
import { PelayanApiService } from '../_shared/services/pelayan-api.service';
import { ChangeFlagService } from '../_shared/services/change-flag.service';

@Component({
  selector: 'app-showfavorite',
  templateUrl: './showfavorite.component.html',
  styleUrls: ['./showfavorite.component.css']
})
export class ShowfavoriteComponent implements OnInit {

  public kantinFav: KantinFavorite = null
  public kantin: Kantin = null;
  public flagss: string;

  constructor(
    private pelayanApi: PelayanApiService,
    public bendera: ChangeFlagService
  ) { }

  ngOnInit() {
    this.pelayanApi.getKantinFav().subscribe(
      result => { this.kantinFav = result; console.log(this.kantinFav);},
      error => { console.log(error); }
    );
    this.flagss = (this.bendera.login_flag.value).toString();
    this.pelayanApi.getAllKantin().subscribe(
      result => { this.kantin = result; console.log(this.kantin);},
      error => { console.log(error); }
    );
  }

  public selectedIdx = 0;

  selectItem(index):void {
    this.selectedIdx = index;
  }
}
