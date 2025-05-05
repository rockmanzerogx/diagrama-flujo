import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.css',
  standalone: true,
})
export class Ejemplo5Component {
  maxSimulaciones: number = 0;
  maxDias: number = 0;
  maxHoras: number = 0;
  precioVentaUnitario: number = 0;
  costoFijoDiario: number = 0;
  costoUnitarioArticulo: number = 0;
  tabla: any[] = [];
  tablaVisible: boolean = false;
  errorMessage: string = '';

  calcularSimulaciones() {
    this.tabla = [];
    this.errorMessage = '';

    if (
      this.maxSimulaciones <= 0 ||
      this.maxDias <= 0 ||
      this.maxHoras <= 0 ||
      this.precioVentaUnitario <= 0 ||
      this.costoFijoDiario <= 0 ||
      this.costoUnitarioArticulo <= 0
    ) {
      this.errorMessage = 'All inputs must be greater than zero.';
      return;
    }

    for (let simulacion = 1; simulacion <= this.maxSimulaciones; simulacion++) {
      for (let dia = 1; dia <= this.maxDias; dia++) {
        for (let hora = 1; hora <= this.maxHoras; hora++) {
          const rclientes = Math.random();
          let nclientes = 0;
          if (rclientes >= 0.35) {
            nclientes++;
          }
          const totalIncome = this.precioVentaUnitario * nclientes;
          const totalFixedCost = this.costoFijoDiario;
          const totalVariableCost = this.costoUnitarioArticulo * nclientes;
          const totalCost = totalFixedCost + totalVariableCost;
          const beneficio = totalIncome - totalCost;

          this.tabla.push({
            simulacion: simulacion,
            dia: dia,
            hora: hora,
            nclientes: nclientes,
            rclientes: rclientes.toFixed(2),
            totalIncome: totalIncome.toFixed(2),
            totalFixedCost: totalFixedCost.toFixed(2),
            totalVariableCost: totalVariableCost.toFixed(2),
            totalCost: totalCost.toFixed(2),
            beneficio: beneficio.toFixed(2),
          });
        }
      }
    }
    this.tablaVisible = true;
  }
}
