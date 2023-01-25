import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //personajes: Personaje[] = [];
  // get personajes(): Personaje[]{
  //   return this._dbzService.personajes;
  // }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
  // agregarNuevoPersonaje( event: Personaje ){
  //   this.personajes.push( event );
  //   console.log( event );
  // }

  constructor(){
    
  }

}
