import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _service: AuthService, private router: Router) { }

  ngOnInit() {
  }
  salir() {
    this._service.logout();
    this.router.navigateByUrl('/login');
  }

  buscar(termino: string) {
    //console.log(termino);
    this.router.navigate(['/home/buscar', termino]);

  }

}
