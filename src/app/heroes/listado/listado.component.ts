import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes:string[]=['Spiderman', 'Ironman', 'Goku', 'Superman', 'Saitama']
  public heroeBorrado:string = '';

  borrarElemento():void{
     this.heroeBorrado=this.heroes.shift() || '';
  }
}
