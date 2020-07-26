import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,OnChanges{
  @Input() message:any;
  @Input() user:User;
  constructor(private _router: Router,private _sessionService:SessionService) { 
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(){
  }
  Logout(){
    this._sessionService.removeUser();
    this._router.navigate(['login']);    
  }
}
