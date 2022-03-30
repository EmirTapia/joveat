import { Blog } from './../../models/blog.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

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
