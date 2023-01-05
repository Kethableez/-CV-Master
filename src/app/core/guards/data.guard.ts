import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({providedIn: 'root'})
export class DataGuard implements CanActivate {
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.dataService.hasValidData()) this.router.navigate(['home']);
    return this.dataService.hasValidData();
  }
}
