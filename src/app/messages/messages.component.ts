import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../models/message'; 
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }
  @Input() messages:Message[];
  @Output() valueChange = new EventEmitter();
  ngOnInit(): void {
  }
  Read(id:number){
    this.messages.find(x=>x.id==id).isRead=true;
    this.valueChange.emit(id);
  }

}
