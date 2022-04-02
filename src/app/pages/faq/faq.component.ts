import { Component, OnInit } from '@angular/core';
import { Faq } from './../../models/faq.model';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public faqs: Faq[];
  constructor() {
    this.faqs=[
    {pregunta:'¿Cuánto duran las sesiones? ',respuesta:'Primera vez: 60 minutos, Subsecuente: 50 minutos'},
    {pregunta:'¿Cómo debo ir vestido? ',respuesta:' Si tu consulta es presencial: Procura llevar ropa cómoda en cada consulta, que no sea holgada, (short y top de ejercicio).    Si tu consulta es a distancia: Procura tener tu peso y tu estatura más reciente (no mayor a 5 días programada la consulta).'},
    {pregunta:'¿Con que materiales debo asistir a mi consulta?',respuesta:'Si tienes análisis de sangre no mayores a 3 meses, puedes escanearlos, tomarles foto o sacarles una copia para poder compartírmelos.'},
	{pregunta:'¿Qué debo hacer si estoy tomando un medicamento o vitaminas? ',respuesta:'Si tomas algún medicamento o multivitamínico, anota sus nombres, la dosis y la frecuencia con la que lo consumes y tenlos a la mano para el día de la consulta.'},
	{pregunta:'¿Qué herramientas debo presentar si vivo con diabetes o hipertensión?',respuesta:'Lleva tu diario de glucosas/presión, si es en línea tu consulta envíame una foto el día de tu consulta.Si te inyectas insulina saber unidades e insulina que utilizas.'},
{pregunta:'¿Qué pasa si falto a una consulta agendada?',respuesta:'Si faltas sin aviso previo a tu consulta, en la próxima sesión se cobrará un 25% extra. '},
{pregunta:'¿En cuánto tiempo recibo mi plan de alimentación? ',respuesta:'Los documentos se te envían por correo electrónico o WhatsApp en un plazo máximo de 72 horas posteriores a la consulta (excepto los domingos)'},
{pregunta:'¿Cómo confirmo mi cita en línea? ',respuesta:'Tu cita se confirmará con el pago, envíanos un WhatsApp o DM, con una foto del comprobante, puede ser en OXXO, sucursal bancaria de origen, transferencia electrónica. 😊'}
  ]

   }

  ngOnInit(): void {
    this.faqs
  }

}
