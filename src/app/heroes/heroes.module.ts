import { NgModule } from "@angular/core";
import { HeoreComponet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeoreComponet,
        ListadoComponent
    ],
    exports: [ 
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}