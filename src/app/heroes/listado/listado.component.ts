import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['Iron-Man','Spider-Man','Hulk','Mujer Lagarto', 'Black widow','Gatubela'];
  lastHeroe: string = "";
  lBorrado: boolean = false;

  borrarHeroe() {
    this.lastHeroe = this.heroes.shift() || '';
    this.lBorrado = true;
  }
}
