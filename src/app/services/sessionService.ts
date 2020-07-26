import {Injectable} from '@angular/core';
import { User } from '../models/User';
@Injectable()
export class SessionService{
    setUser(user: User){
        sessionStorage.setItem("user",JSON.stringify(user))    
    }  
    removeUser(){
        sessionStorage.removeItem("user");
    }
    getUser(){
        let user:User=JSON.parse(sessionStorage.getItem("user"));
        return  user;
    }
    checkUser(){
       
        let user:User=JSON.parse(sessionStorage.getItem("user"));
        if(user==null || user==undefined){
            return true;
        }
        return false;
    }
    
}