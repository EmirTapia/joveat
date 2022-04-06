import { Component, OnInit } from '@angular/core';
import { Blog } from './../../models/blog.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public blog: Blog[];
  constructor() {
    this.blog =
    [
      {nombre:'¿Comes por ansiedad?',descripcion:'', fecha:['15','Enero'], imagen:'image-01'},      {nombre:'Articulo 2',descripcion:'', fecha:['15','Febrero'], imagen:'image-01'},
      {nombre:'Articulo 3',descripcion:'', fecha:['15','Marzo'], imagen:'image-01'},
    ];
  }

  ngOnInit(): void {
  }

}
