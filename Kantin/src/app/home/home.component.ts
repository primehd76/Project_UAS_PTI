import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { ChangeFlagService } from '../_shared/services/change-flag.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username: string;

  constructor(
    public bendera: ChangeFlagService
  ) { }

  ngOnInit() {
    this.username = (this.bendera.user_name.value).toString();
    console.log(this.username);
    
  }

}
