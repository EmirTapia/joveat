import { Component, OnInit } from '@angular/core';
import { Paquete } from './paquete.model';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  public paquetes: Paquete[];
  public paq: Paquete = {
    nombre: '',
    precio: 0,
    preciopaquete: 0,
    dirigido: '',
    descripcion: [''],
    duracion: '',
    tipo: [''],
    tipoConsulta: 3
  };
  constructor() {
    this.paquetes = [{
      nombre: 'Zorro rojo',
      precio: 400.00,
      preciopaquete: 0,
      dirigido: 'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion: [''],
      duracion: '60 minutos',
      tipo: ['Presencial'],
      tipoConsulta: 0
    },
    {
      nombre: 'Zorro plateado',
      precio: 600.00,
      preciopaquete: 5800.00,
      dirigido: 'Dirigido para personas que viven con diabetes mellitus tipo 2.',
      descripcion: [''],
      duracion: '60 minutos',
      tipo: ['Presencial'],
      tipoConsulta: 1
    },
    {
      nombre: 'Zorro kit',
      precio: 600.00,
      preciopaquete: 5800.00,
      dirigido: 'Dirigido para mujeres que planean embarazarse o están embarazadas.',
      descripcion: ['•	Consulta nutricia quincenal, para conocer objetivos, evaluación del estado nutricio actual o del trimestre que te encuentres.',
        '•	Recomendaciones alimentarias afines a tu trimestre de gestación o para el inicio de la concepción.',
        '•	Antropometría (monitoreo de ganancia de peso adecuada para cada trimestre del embarazo).',
        '•	Orientación en la selección del mejor multivitamínico.',
        '•	Lista del súper y lista de equivalentes. ',
        '•	Plan de alimentación individualizado por equivalentes y 2 opciones de menú personalizados que incluyen ideas de hidratación, metas y recomendaciones alimentarias afines a tus objetivos. ',
        '•	Resolución de dudas y apoyo vía WhatsApp.',
        '•	Sesiones educativas con temas de alimentación.'],
      duracion: '60 minutos',
      tipo: ['CDMX - CHPO'],
      tipoConsulta: 3
    }]
  }
  ngOnInit(): void {

  }

}
