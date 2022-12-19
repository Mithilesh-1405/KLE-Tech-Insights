import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(public service:MyserviceService){

  }
  displayModel:any;
  ngOnInit(): void {
      this.displayModel=this.service.sendModel();
      console.log(this.displayModel)
  }

}
