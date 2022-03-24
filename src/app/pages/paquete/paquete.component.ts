import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  name='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['paquete'];
  }
}
