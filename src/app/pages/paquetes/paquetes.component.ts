import { Component, OnInit } from '@angular/core';
import {Paquete} from './paquete.model';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {
  onClick(event:any)
  {
      let paqs = this.paquetes.filter(paq => paq.nombre == event.target.id);
      this.paq = paqs[0];
  }
  public paquetes : Paquete[];
  public paq : Paquete = {
    nombre:'',
    precio:0,
    dirigido:'',
    descripcion:'',
    duracion:'',
    tipo:'',
  };

  constructor() {
    this.paquetes =[{
      nombre:'Zorro rojo',
      precio:400.00,
      dirigido:'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion:'Sesiones educativas con temas de alimentación, medidas y porciones caseras, composición corporal, lectura de etiquetas, conciencia corporal, alimentación emocional, recomendaciones de actividad física y más…',
      duracion:'60 minutos',
      tipo:'Presencial',
    },
    {
      nombre:'Zorro veloz',
      precio:600.00,
      dirigido:'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion:'Sesiones educativas con temas de alimentación, medidas y porciones caseras, composición corporal, lectura de etiquetas, conciencia corporal, alimentación emocional, recomendaciones de actividad física y más… y otra y otra',
      duracion:'160 minutos',
      tipo:'Presencial online',
    }]
   }
  ngOnInit(): void {

  }

}
