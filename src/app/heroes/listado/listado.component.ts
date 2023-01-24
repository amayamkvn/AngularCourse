import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk']
  heroeEliminado: string = '';

  borrarHeroe() {
    //this.heroes.length = this.heroes.length -1;
    const heroeEliminado = this.heroes.shift() || '';
    this.heroeEliminado = heroeEliminado;
  }

}
