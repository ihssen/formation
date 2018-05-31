import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../player';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private api: ApiService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: '',
      email: ['',Validators.email],
      phone: ''
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newPlayer = new Player(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['phone']
    );
    this.api.post('players', newPlayer).subscribe(res => {
      console.log(res);
      this.router.navigate(['']);
    });
  }

}
