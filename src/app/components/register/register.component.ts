import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private router:Router) { }


  ngOnInit() {

    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      birth: [''],
      phone: [''],
      address: ['']
    })

  }


  next(){
    this.router.navigateByUrl("/home");
  }



}
