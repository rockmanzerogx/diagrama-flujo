import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-ejemplo6',
  standalone: true,
  imports: [FormsModule, CommonModule,MatGridListModule,MatDividerModule],
  templateUrl: './ejemplo6.component.html',
  styleUrl: './ejemplo6.component.css'
})
export class Ejemplo6Component {
  maxSimulaciones: number = 0;
  maxDias: number = 0;
  precioHuevo: number = 0;
  precioGallina: number = 0;
  tabla: any[] = [];
  tablaVisible: boolean = false;
  errorMessage: string = '';

  simular() {
    this.errorMessage = '';
    this.tabla = [];
    if (
      this.maxSimulaciones <= 0 ||
      this.maxDias <= 0 ||
      this.precioHuevo <= 0 ||
      this.precioGallina <= 0
    ) {
      this.errorMessage = 'Todos los campos deben ser mayores a cero';
      return;
    }

    for (let simulacion = 1; simulacion <= this.maxSimulaciones; simulacion++) {
      let cantidadPollos = 0;
      for (let dia = 1; dia <= this.maxDias; dia++) {
        const cantidadHuevos = this.poisson(1); // Lambda = 1
        const rPollo = Math.random();
        if (rPollo < 0.2) {
          cantidadPollos++;
        }
        const totalHuevos = this.precioHuevo * cantidadHuevos;
        const totalPollos = this.precioGallina * cantidadPollos;
        const totalGanado = totalHuevos + totalPollos;
        this.tabla.push({
          dia,
          cantidadHuevos,
          cantidadPollos,
          totalHuevos: totalHuevos.toFixed(2),
          totalPollos: totalPollos.toFixed(2),
          totalGanado: totalGanado.toFixed(2),
        });
      }
    }

    this.tablaVisible = true;
  }

  // Poisson distribution implementation
  poisson(lambda: number): number {
    const L = Math.exp(-lambda);
    let p = 1.0;
    let k = 0;
    do {
      k++;
      const u = Math.random();
      p *= u;
    } while (p > L);
    return k - 1;
  }
}
