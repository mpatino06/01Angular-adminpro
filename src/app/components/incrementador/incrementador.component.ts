import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  progreso: number = 0;

  get getPorcentaje(){
    return `${this.progreso}%`;
  }

  cambiarValor(valor: number){

    debugger;
    this.progreso +=  valor;

    console.log(this.progreso);
    if(this.progreso >= 100){
      this.progreso = 100;
      return 100;
    }else if (this.progreso <= 0){
      this.progreso = 0;
      return 0;
    }

    return this.progreso;

  }


}
