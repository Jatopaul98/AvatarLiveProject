import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avatar';
  loginform = new FormGroup({


    user: new FormControl('', [
      Validators.required,Validators.minLength(3)
    ]),
  })

  submit() {
    console.log(this.loginform.value);
  }

  get user(){
    return this.loginform.get('user');

  }

}
