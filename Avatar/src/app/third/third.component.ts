import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  loginform = new FormGroup({


    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  })

  submit() {
    console.log(this.loginform.value);

  }
  submitfooter()
{
  alert("Successfully Signed In");
}  get email(){
    return this.loginform.get('email');

  }

  constructor() { }

  ngOnInit(): void {
  }

}
