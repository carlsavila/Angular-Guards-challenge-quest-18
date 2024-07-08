import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const isAdminGuard: CanActivateFn = (route, state) => {

  const userSvc: UserService = inject(UserService);

  if (userSvc.isAuthenticated() && userSvc.getRole() === "ADMIN") {
    console.log("Authenticated and ADMIN");
    return true;
  }
  console.log("Not authenticated and/or ADMIN");
  return false;
};
