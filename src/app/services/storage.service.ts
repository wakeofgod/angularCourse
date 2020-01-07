import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

  get(key){
   // return 'this is a service';
   return JSON.parse(localStorage.getItem(key));
  }
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
  remove(key){
    localStorage.removeItem(key);
  }
}
