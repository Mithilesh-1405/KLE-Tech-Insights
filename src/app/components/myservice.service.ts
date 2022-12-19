import { Injectable } from '@angular/core';
import { User } from '../user';
import { toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  
  serviceModel: User[] = [];
  setservice(regmodel:any){
    this.serviceModel.push(regmodel)
    // console.log('This is service wala usermodel');
    // console.log(this.serviceModel)
  }
  sendModel(){
    return this.serviceModel
  }
}
