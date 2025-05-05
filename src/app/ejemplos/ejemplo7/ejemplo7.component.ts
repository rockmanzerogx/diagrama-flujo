import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo7',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejemplo7.component.html',
  styleUrl: './ejemplo7.component.css',
  standalone: true,
})
export class Ejemplo7Component {
  maxSimulaciones: number = 0;
  maxDias: number = 0;  
  capacidadBodega: number = 0;
  costoMantenimientoUnitario: number = 0;
  precioVentaUnitario: number = 0;
  costoAdquisicionUnitario: number = 0;
  
  tabla: any[] = [];

  tablaVisible: boolean = false;
  errorMessage: string = '';

  simular() {
    this.errorMessage = '';
    this.tabla = [];
    if (
      this.maxSimulaciones <= 0 ||
      this.maxDias <= 0 ||      
      this.capacidadBodega <= 0 ||
      this.costoMantenimientoUnitario <= 0 ||
      this.precioVentaUnitario <= 0 ||
      this.costoAdquisicionUnitario <= 0
    ) {
      this.errorMessage = 'Todos los campos deben ser mayores a cero';
      return;
    }
    
    for (let simulacion = 1; simulacion <= this.maxSimulaciones; simulacion++) {
      let inventarioInicial:number = Math.floor(Math.random() * this.capacidadBodega) + 1;
      for (let dia = 1; dia <= this.maxDias; dia++) {
        const rdemanda = Math.random();
        let demanda:number;
        if (rdemanda < 0.4) {
          demanda = Math.round(1 + 3 * rdemanda);
        } else {
          demanda = Math.round(4 + 6 * rdemanda);
        }
        
        const inventarioFinal = Math.min(this.capacidadBodega, inventarioInicial + 1);
        const ventas = Math.min(demanda, inventarioFinal);
        const costoMantenimiento = this.costoMantenimientoUnitario * inventarioFinal;
        const ingresoVentas = this.precioVentaUnitario * ventas;
        const costoAdquisicion = this.costoAdquisicionUnitario * demanda;
        const ganancias = ingresoVentas - costoMantenimiento - costoAdquisicion;

        this.tabla.push({
          dia,
          inventarioInicial,
          rdemanda: rdemanda.toFixed(2),
          demanda,
          inventarioFinal,
          ventas,
          costoMantenimiento: costoMantenimiento.toFixed(2),
          ingresoVentas: ingresoVentas.toFixed(2),
          costoAdquisicion: costoAdquisicion.toFixed(2),
          ganancias: ganancias.toFixed(2)
        });
        inventarioInicial = inventarioFinal;
      }
    }

    this.tablaVisible = true;
  }
  
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
