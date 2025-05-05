import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo1',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css',
  standalone: true,
})
export class Ejemplo1Component {
  t: number = 0; // Tiempo
  simulaciones: number = 0;
  k: number = 0; // Capital
  objetivo: number = 0; //Objetivo
  i: number = 0; // Tasa de interés
  tabla: any[] = [];
  capitalTotalGanado: number = 0;
  tablaVisible: boolean = false;
  tiemponecesario: number = 0;
  errorMessage: string = '';

  calcular() {
    this.tabla = [];
    let capitalActual = this.k;
    if(this.k == 0 || this.i == 0 || this.t==0){
          this.errorMessage = 'Se deben rellenar con campos de tiempo, capital y tasa de interes antes de calcular objetivo';
          return;
        }
    else{
    for (let ct = 1; ct <= this.t; ct++) {
      const interes = capitalActual * (this.i/100);
      capitalActual += interes;
      this.tabla.push({ 
        CT: ct,
        I: interes.toFixed(2),
        k: capitalActual.toFixed(2),
      });
    }}
    if (this.objetivo == 0) {
      this.tiemponecesario =0;
    }
    else {
    //this.tiemponecesario = Math.log(this.objetivo / this.k) / Math.log(1 + this.i / 100);
    //this.tiemponecesario = Math.round(Math.log(this.objetivo / this.k) / Math.log(1 + this.i / 100));
    //this.tiemponecesario = Number((Math.log(this.objetivo / this.k) / Math.log(1 + this.i / 100)).toFixed(2));
    this.tiemponecesario = Math.ceil(Math.log(this.objetivo / this.k) / Math.log(1 + this.i / 100));
    }
    //this.tiemponecesario = this.objetivo;

    this.capitalTotalGanado = this.calcularKf();
    this.tablaVisible = true;
  }

  calcularKf(): number {
    if (this.t == 0 || this.k == 0 || this.i == 0) {
      return 0;
    }
    const kf = this.k * Math.pow(1 + (this.i / 100), this.t);
    return parseFloat(kf.toFixed(2));
  }

  clean(){
    this.t = 0;
    this.k = 0;
    this.simulaciones = 0;
    this.i = 0;
    this.tabla = [];
    this.capitalTotalGanado = 0;
    this.tablaVisible = false;
  }

}
