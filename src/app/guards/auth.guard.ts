import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private _service:AuthService,private router:Router){

  }
  canActivate(): boolean {
    if(this._service.estaAutenticado()){
       return true;
    }else{
      this.router.navigateByUrl('/login');
     return false;
    }
  }
  
}
