import { Component, OnInit, Input} from '@angular/core';/*onit porque*/
import { CursosDisponibles } from './cursos-disponibles';

@Component({
  selector: 'app-ikaeeg-list',
  templateUrl: './ikaeeg-list.component.html',
  styleUrls: ['./ikaeeg-list.component.css']
})
export class IkaeegListComponent implements OnInit {
  @Input()CursosDisponiblesList: CursosDisponibles [] = [];

  constructor() {}
  ngOnInit(): void {
    
  }
  searchcursosikaee(searchText: string){
    console.log(searchText);
  }


}






