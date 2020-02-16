import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel;
  image: string;

  constructor(private _auth: AuthService,private router:Router) { }

  ngOnInit() {
    this.image = "../../../assets/images/img-01.jpg";
    this.usuario = new UsuarioModel();


    $('.js-tilt').tilt({
      scale: 1.1
    })
  }

  onSubmit(f: NgForm) {
    if (f.invalid) {
      console.log("Formulario inválido");
      return;
    }
    Swal.fire({
    allowOutsideClick:true,
    type:'info',
    text:"Espere porfavor ..."
    });
    Swal.showLoading();
    this._auth.login(this.usuario).subscribe(
      (resp) => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');

      },
      (err) => {
        Swal.fire({
          type:'error',
          text:err.error.error.message,
          title:"Error al autenticar"
        })
        console.log(err.error.error.message);
      }


    );

    /*console.log(f);
    console.log(this.usuario);*/

  }

}
