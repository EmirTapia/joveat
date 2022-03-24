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
    tipo:'',
  };
  private necesita:string[]=['']
  constructor() {
    this.paquetes =[{
      nombre:'Zorro rojo',
      precio:400.00,
      preciopaquete:((400 * 10)-400),
      dirigido:'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion:['•	Una consulta nutricional para conocer sus objetivos y evaluar su estado nutricio inicial.',
      '•	Antropometría completa (peso, masa grasa, masa muscular, circunferencias).',
      '•	Lista del súper y lista de equivalentes.',
      '•	Plan de alimentación individualizado por equivalentes y 2 opciones de menú personalizados que incluyen ideas de hidratación, metas y recomendaciones alimentarias afines a tus objetivos.',
      '•	Resolución de dudas y apoyo vía WhatsApp.',
      '•	Sesiones educativas con temas de alimentación.',
      '•	Documentos digitalizados de la consulta nutricia (enviado por correo electrónico o WhatsApp en un plazo máximo de 48 horas posteriores a la consulta) (días hábiles).'],
      duracion:'60 minutos',
      tipo:'Presencial',
    },
    {
      nombre:'Zorro veloz',
      precio:600.00,
      preciopaquete:5800.00,
      dirigido:'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion:['Sesiones educativas con temas de alimentación, medidas y porciones caseras, composición corporal, lectura de etiquetas, conciencia corporal, alimentación emocional, recomendaciones de actividad física y más… y otra y otra'],
      duracion:'60 minutos',
      tipo:'Presencial online',
    }]
   }
  ngOnInit(): void {

  }

}
