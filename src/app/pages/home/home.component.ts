import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userSvc: UserService = inject(UserService);

  userToken!: User;
  userLogin!: string;
  userRole!: string;

  getAuthenticated() {

    this.userToken = new User(
      this.userLogin,
      this.userRole,
      ""
    )
    console.log("Token to authenticate : ", this.userToken)
    this.userSvc.login(this.userToken)
  }
  
}
