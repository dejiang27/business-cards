import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from './services/auth-service.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()

export class AuthGuardGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthServiceService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //this.authService.isLoggined
    return this.authService.isLoggined();
  }
  
}
