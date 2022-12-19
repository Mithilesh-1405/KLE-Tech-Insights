import { Component } from '@angular/core';
import { User } from 'src/app/user';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public serv: MyserviceService, public router: Router) {}

  semhasError = true;

  validateSem(value: any) {
    if (value == 'default') {
      this.semhasError = true;
    } else {
      this.semhasError = false;
    }
  }

  submitData(formVal: NgForm) {
    // console.log(typeof(this.userModel))
    let FormArray = {
      name: formVal.value.name,
      rollnum: formVal.value.rollnum,
      usn: formVal.value.usn,
      sem: formVal.value.sem,
    };
    this.serv.setservice(FormArray);
    this.router.navigateByUrl('display');
  }
}
