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
    {pregunta:'Como agendo una cita?',respuesta:'Envianos un correo con el paquete de tu interes asi como tus datos personales para poder agendar.'},
    {pregunta:'Como agendo una cita?',respuesta:'Envianos un correo con el paquete de tu interes asi como tus datos personales para poder agendar.'},
    {pregunta:'Como agendo una cita?',respuesta:'Envianos un correo con el paquete de tu interes asi como tus datos personales para poder agendar.'},
    {pregunta:'Como agendo una cita?',respuesta:'Envianos un correo con el paquete de tu interes asi como tus datos personales para poder agendar.'}
  ]

   }

  ngOnInit(): void {
    this.faqs
  }

}
