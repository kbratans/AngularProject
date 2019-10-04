import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './classes/user';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  baseUrl:string ="http://localhost:49764/api/user";
  constructor(private httpclient:HttpClient) { }


public getUsers(){
  return this.httpclient.get<any>(this.baseUrl,
  )
  .pipe(
    map(res=>{  
      const returnData: Users[] = [];
      const resArray = res.data.data;
      for(const key in resArray) {
        const newPost = new Users(resArray[key].id, resArray[key].username, resArray[key].name,resArray[key].surname,resArray[key].isdeleted);
        returnData.push(newPost);
      }
      return returnData;
    })
    ,tap(kubra => {
      return kubra;
    }))
  
} 
}
