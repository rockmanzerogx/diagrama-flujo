import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo4',
  imports: [FormsModule, CommonModule],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.css',
  standalone: true,
})
export class Ejemplo4Component {
  simulaciones: number = 0;
  tabla: any[] = [];
  tablaVisible: boolean = false;

  calcular() {
    this.tabla = [];
    this.tablaVisible = false;

    for (let i = 1; i <= this.simulaciones; i++) {
      const rx1 = Math.random();
      const rx2 = Math.random();

      const x1 = Math.round(rx1 * 100);
      const x2 = Math.round(rx2 * 100);

      if (6 * x1 + 3 * x2 >= 200 && 3 * x1 + 5 * x2 >= 180) {
        const z = 2.5 * x1 + 2 * x2;
        this.tabla.push({
          simulacion: i,
          x1: x1,
          x2: x2,
          z: z,
        });
      }
    }
    this.tablaVisible = true;
  }
}
