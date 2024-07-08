import { Injectable } from '@angular/core';
import { User } from '../models/user';

enum role { "ANONYMOUS", "USER", "ADMIN" };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  roleType: typeof role = role;

  users: User[] = [
    new User("user01", this.roleType[1], ""),
    new User("Anonymous01", this.roleType[0], ""),
    new User("user02", this.roleType[1], ""),
    new User("Admin01", this.roleType[2], ""),
    new User("Anonymous02", this.roleType[0], ""),
    new User("Admin02", this.roleType[2], ""),
  ]

  private role: string = "";
  private isauthenticated = false;

  login(userToken: User) {
    this.role = "";
    this.users.find(
      user => {
        if (user.login === userToken.login && user.role === userToken.role) {
          console.log("User ", user, " matchs ", user,)
          this.role = user.role;
          this.isauthenticated = (this.getRole() === this.roleType[1] || this.getRole() === this.roleType[2])
        }

      })
    console.log("Token ", userToken, " authentication  ", (this.isauthenticated) ? "succed" : "failed")
  }

  logout() {
    this.isauthenticated = false;
  }

  isAuthenticated(): boolean {
    return this.isauthenticated;
  }

  getRole(): string {
    return this.role;
  }
}
