import { Component, OnInit } from '@angular/core';
import { Blog } from './../../models/blog.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  public blogs:Blog[]
  public blog:Blog={nombre:'',descripcion:'',fecha:[''],imagen:''}
  public name:string =''

  constructor(private route:ActivatedRoute) {
    this.blogs =
    [
      {nombre:'¿Comes por ansiedad?',descripcion:'<p>Seamos honestos al aceptar que para saber comer se necesita educación. </p><p>La cultura alimentaria actual nos ha orillado a tener días líquidos, donde se pierde el sentido humano de la comida, sin una sola investidura de amor por nutrirnos, pues ni siquiera alcanzamos a consumir los nutrientes biológicos y psicológicos que impactan en nuestra salud y bienestar. </p>            <p>¿Has escuchado decir que: “eres lo que comes”?      Si la respuesta es sí, que nos digan cómo hacerlo a la perfección.      Pues si haces lo que TÚ puedes, perdido o perdida ahí vas "alimentándote" sin saber nutrirte.      </p>            <p>Si tus conocimientos están entre lo que has leído en páginas de divulgación, lo que te dijo la comadre, el entrenador de gym o el primo de un amigo, ¡aguas…! “Zapatero, a tus zapatos”.</p>            <p>Comienza desde tu oficio, ¿en serio creerás lo que te dicen otros que también están perdidos? ¿Eso es para ti?      ¡Tu identidad está en juego, decide bien quien será tu maestro!  </p>                <p>La nueva orden mundial confunde al ser humano perdiendo la identidad del arte culinario y deslumbra ante nosotros emociones como angustia, vacío e insatisfacción, que hace que te alimentes rápido o mientras lo haces, piensas en otros pendientes, porque la realidad del mundo te quiere efectivo instantáneamente.      </p>            <p>Detente y acércate a un profesional para que sea tu acompañante en este camino que tomas todos los días pero aún no encuentras el sentido tan importante que es caminarlo con educación.</p>', fecha:['15','Enero'], imagen:'blog-01'},
      {nombre:'Articulo 2',descripcion:'', fecha:['15','Febrero'], imagen:'blog-02'},
      {nombre:'Articulo 3',descripcion:'', fecha:['15','Marzo'], imagen:'blog-03'},
    ];

   }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    let singleBlog = this.blogs.filter(blog => blog.nombre == this.name);
    this.blog = singleBlog[0];
  }
}
