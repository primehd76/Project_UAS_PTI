import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { User } from '../../models/user';
import { ChangeFlagService } from '../../services/change-flag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public Flag_login: User;
  public flagss: string;

  constructor(
    public bendera: ChangeFlagService
  ) { }

  ngOnInit() {
    this.flagss = (this.bendera.login_flag.value).toString();
    console.log(this.flagss);
  }

}
