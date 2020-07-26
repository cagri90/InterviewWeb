import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { DataService } from '../services/dataService';
import { SessionService } from '../services/sessionService';
import { URLS } from '../models/URLS';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private _dataService:DataService,private _sessionService:SessionService) { 
   this.user=new User();
  }
  user:User;
  ngOnInit() {}
  Login(){
    this._dataService.Post(URLS.url.loginPage.login,this.user).subscribe((data: User) => {
      if(data!=null){
        this._sessionService.setUser(data);
        this._router.navigate(['home']);    
        }
      else{
        alert("Kullanıcı bilgileri hatalı");
      }
    })
  }

}
