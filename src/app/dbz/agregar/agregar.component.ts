import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private _dbzService: DbzService ){}

  agregar(){
    //event.preventDefault();
    if( this.nuevo.nombre.trim().length === 0){
      return;
    }else {
      this._dbzService.agregarPersonaje( this.nuevo );
    }
    this.nuevo = { nombre: '', poder: 0 };
  }
  cambiarNombre( event: any){
    console.log( event );
  }
  
}
