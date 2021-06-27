import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user : User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public saveData(registerForm : NgForm){
    console.log(registerForm.form);
    console.log('valeur: ',JSON.stringify(registerForm.value));
  }
}
