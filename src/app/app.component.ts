import { Component } from '@angular/core';
import { CursosDisponibles} from './ikaeeg-list/cursos-disponibles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';
  CursosDisponiblesList:CursosDisponibles[] =[

    {

      name: "	La ciencia de los hábitos: 5 pilares.",
      tipo: "Curso",
      modalidad: "virtual",
      video: "/path/to/photo.jpg",
      cantidadTemas: 4,
      talleres_y_foros: true,
      aprendizajeAsistido: true
    
    
      },
    
    {
    
    
      name: "	El poder del cuerpo mental en presencia y equilibrio.",
      tipo: "Curso",
      modalidad: "virtual",
      video: "/path/to/photo.jpg",
      cantidadTemas:5,
      talleres_y_foros: true,
      aprendizajeAsistido: true,
    
    
    
    
    },
    
    {
    
      name: "	Cultivando la energía en la cotidianidad.",
      tipo: "Curso",
      modalidad: "virtual",
      video: "/path/to/photo.jpg",
      cantidadTemas:6,
      talleres_y_foros: true,
      aprendizajeAsistido: true,
    
    
    },
    
    {
    
      name: "Del mundo de nuestro cerebro al universo de nuestra mente. ",
      tipo: "Curso",
      modalidad: "virtual",
      video: "/path/to/photo.jpg",
      cantidadTemas:2,
      talleres_y_foros: true,
      aprendizajeAsistido: true,
    },
    
    {
    
      name: "Loque me moviliza y da sentido",
      tipo: "Curso",
      modalidad: "virtual",
      video: "/path/to/photo.jpg",
      cantidadTemas: 4,
      talleres_y_foros: true,
      aprendizajeAsistido: true,
    
    
    },
    

  ]
}
