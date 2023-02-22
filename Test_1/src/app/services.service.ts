import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
   

  // setData(data:any){
  //   localStorage.setItem(num,data)
  // }

  setData(key: string, user: User) {
    localStorage.setItem(key, JSON.stringify(user));
  }

  
  editItem(key: string, value: any) {
     localStorage.setItem(key, JSON.stringify(value));
   }

  getData(id:string){
    return localStorage.getItem(id);
   }
  constructor() { }
}
