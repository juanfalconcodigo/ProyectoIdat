import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ano:number;
  empresa:string;
  constructor(private _service:AuthService,private router:Router) { }

  ngOnInit() {
    this.ano=new Date().getFullYear();
    this.empresa="DanJulTours";
  }

  

}
