import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo3',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.css',
  standalone: true,
})
export class Ejemplo3Component {
  maxJuegos: number = 10;
  precioJuego: number = 2;
  costoVictoria: number = 5;
  tabla: any[] = [];
  tablaVisible: boolean = false;
  errorMessage: string = '';
  njgc: number = 0;
  gneta: number=0;
  calcular() {
    this.errorMessage = '';
    if (this.maxJuegos == 0 || this.precioJuego == 0 || this.costoVictoria == 0) {
      this.errorMessage = 'Los campos son obligatorios';
      return;
    }

    this.tabla = [];
  
    for (let i = 1; i <= this.maxJuegos; i++) {
      const rdado1 = parseFloat(Math.random().toFixed(3));
      const rdado2 = parseFloat(Math.random().toFixed(3));
      

      const dado1 = Math.round(1 + 5 * rdado1);
      const dado2 = Math.round(1 + 5 * rdado2);

      const sdado = dado1 + dado2;
     

      if (sdado == 7) {
        this.gneta = this.gneta+this.precioJuego-this.costoVictoria;
        
      } else {
        this.gneta = this.gneta+this.precioJuego;
        this.njgc=this.njgc+1;
      }

      //const aux = gneta;
      //njgc += aux;

      this.tabla.push({
        cantidadJuegos: i,
        rdado1: rdado1.toFixed(2),
        dado1: dado1,
        rdado2: rdado2.toFixed(2),
        dado2: dado2,
        sdado: sdado,
        gneta: this.gneta,
        njgc: this.njgc,
      });
    }
    this.tablaVisible = true;
  }

  clean() {
    this.maxJuegos = 0;
    this.precioJuego = 0;
    this.costoVictoria = 0;
    this.tabla = [];
    this.tablaVisible = false;
    this.errorMessage = '';
    this.gneta = 0;
    this.njgc = 0;
  }
}
