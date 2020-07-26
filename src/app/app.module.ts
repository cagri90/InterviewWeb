import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { MessageSubjectPipe } from './pipes/messagePipe';
import { DataService } from './services/dataService';
import { SessionService } from './services/sessionService';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    MessageComponent,
    HeaderComponent,
    MessageSubjectPipe,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
