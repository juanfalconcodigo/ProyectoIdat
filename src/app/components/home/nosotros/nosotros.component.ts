import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  /*obs haveces me da error el efecto de js-tilt no hay problema no es el codigo si no la libreria*/
  constructor() { }

  ngOnInit() {
    $('.js-tilt').tilt({
      scale: 1.1
    });
  }

}
