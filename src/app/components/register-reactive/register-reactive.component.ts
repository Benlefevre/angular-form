import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../register/user';

@Component({
  selector: 'app-register-reactive',
  templateUrl: './register-reactive.component.html',
  styleUrls: ['./register-reactive.component.scss']
})
export class RegisterReactiveComponent implements OnInit {

  public registerForm! : FormGroup;

  public user : User = new User();

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      firstName : ['',[Validators.required, Validators.maxLength(40)]],
      lastName : ['',[Validators.required,Validators.minLength(4)]],
      email : ['',[Validators.required, Validators.email]],
      sendCatalog : false
    })
  }

  public saveData(){
    console.log(this.registerForm);
    console.log('valeurs: ', JSON.stringify(this.registerForm.value) )
  }

  public fillFormData() : void {
    this.registerForm.setValue({
      firstName : 'Test',
      lastName : 'Test',
      email : 'test@test.fr',
      sendCatalog : true
    })
  }
}
