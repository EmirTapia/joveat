import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Paquete} from '../paquetes/paquete.model';
@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {
  name:string='';
  public paquetes : Paquete[];
  public paq : Paquete =
  {
    nombre:'',
    precio:0,
    preciopaquete:0,
    dirigido:'',
    descripcion:[''],
    duracion:'',
    tipo:[''],
    tipoConsulta:0
  };
  public infonecesita:string[];

  constructor(private route:ActivatedRoute)
  {
    this.infonecesita = ['info1','info2']
    this.paquetes =[{
      nombre:'Zorro rojo',
      precio:500.00,
      preciopaquete:((500 * 10)-500),
      dirigido:'Dirigido para personas que buscan mejorar sus hábitos de alimentación.',
      descripcion:['•	Una consulta nutricional para conocer sus objetivos y evaluar su estado nutricio inicial.',
      '•	Antropometría completa (peso, masa grasa, masa muscular, circunferencias).',
      '•	Lista del súper y lista de equivalentes.',
      '•	Plan de alimentación individualizado por equivalentes y 2 opciones de menú personalizados que incluyen ideas de hidratación, metas y recomendaciones alimentarias afines a tus objetivos.',
      '•	Resolución de dudas y apoyo vía WhatsApp.',
      '•	Sesiones educativas con temas de alimentación.',
      '•	Documentos digitalizados de la consulta nutricia (enviado por correo electrónico o WhatsApp en un plazo máximo de 48 horas posteriores a la consulta) (días hábiles).'],
      duracion:'60 minutos',
      tipo:['Presencial'],
      tipoConsulta:1
    },
    {
      nombre:'Zorro velóz',
      precio:600.00,
      preciopaquete:((600 * 10)-600),
      dirigido:'Dirigido para personas que viven con diabetes mellitus tipo 2.',
      descripcion:['•	Una consulta nutricional para organizar los objetivos nutricios de la mano con el tratamiento médico (oral o inyectado) evaluando el estado nutricional actual.',
      '•	Antropometría completa (peso, masa grasa, masa muscular, circunferencias).',
      '•	Lista del súper y lista de equivalentes.',
      '•	Plan de alimentación individualizado por equivalentes y 2 opciones de menú personalizados que incluyen ideas de hidratación, metas y recomendaciones alimentarias afines a tus objetivos. ',
      '•	Resolución de dudas y apoyo vía WhatsApp.',
      '•	Sesiones educativas de: conteo de carbohidratos, Diferencias entre insulinas y zonas de aplicación, educación para evitar la aparición o el progreso de complicaciones derivadas por la diabetes, automonitoreo glucosa (glucómetro).',
      '•	Documentos digitalizados de la consulta nutricia (enviado por correo electrónico o WhatsApp en un plazo máximo de 48 horas posteriores a la consulta) (días hábiles).'
      ],
      duracion:'60 minutos',
      tipo:['Presencial'],
      tipoConsulta:1
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
    this.name = this.route.snapshot.params['name'];
    let paqs = this.paquetes.filter(paq => paq.nombre == this.name);
    this.paq = paqs[0];
  }
}
