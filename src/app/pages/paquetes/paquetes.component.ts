import { Component, OnInit } from '@angular/core';
import {Paquete} from './paquete.model';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public paquetes : Paquete[];
  public paq : Paquete = {
    nombre:'',
    precio:0,
    preciopaquete:0,
    dirigido:'',
    descripcion:[''],
    duracion:'',
    tipo:[''],
    tipoConsulta:3
  };
  constructor() {
    this.paquetes =[{
      nombre:'Zorro rojo',
      precio:400.00,
      preciopaquete:0,
      dirigido:'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion:[''],
      duracion:'60 minutos',
      tipo:['Presencial'],
      tipoConsulta:0
    },
    {
      nombre:'Zorro velóz',
      precio:600.00,
      preciopaquete:5800.00,
      dirigido:'Dirigido para personas que viven con diabetes mellitus tipo 2.',
      descripcion:[''],
      duracion:'60 minutos',
      tipo:['Presencial'],
      tipoConsulta:1
    }]
   }
  ngOnInit(): void {

  }

}
