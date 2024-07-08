import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';


export const isConnectedGuard: CanActivateFn = (route, state) => {

const userSvc: UserService = inject(UserService);

  if (userSvc.isAuthenticated() && (userSvc.getRole() === "USER" || userSvc.getRole() === "ADMIN")) {
    console.log("Authenticated and (USER or ADMIN)");
    return true;
  }
  console.log("Not authenticated and/or (USER or ADMIN)");
  return false;
};
