import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output() onUserSignup = new EventEmitter<User>()

  constructor(private userService: UserService,
    private router: Router) { }

  newUser: string
  user: User

  ngOnInit(): void {
    this.user = this.userService.getUser()
    console.log('IM RUNNING')
  }

  onSignup() {
    this.user = this.userService.signup(this.newUser)
    // console.log('this.user', this.user)
    this.onUserSignup.emit(this.user)
    
    // this.router.navigateByUrl('')
  }

}
