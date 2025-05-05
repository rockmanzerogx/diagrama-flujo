import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css',
})
export class Ejemplo2Component implements OnInit {
  ct: number = 2013;
  tn: number = 0.02493;
  tm: number = 0.00743;
  tms: number = 2024;
  pbol: number = 10059856;
  pbolf: number = 0;
  tabla: any[] = [];

  ngOnInit(): void {
    this.tabla = [];
  }

  calcular() {
    this.tabla = [];
    let pbolActual = this.pbol;

    for (let i = this.ct; i <= this.tms; i++) {
      const nac = Math.round(pbolActual * this.tn);
      const mue = Math.round(pbolActual * this.tm);
      pbolActual = pbolActual + nac - mue;
      this.tabla.push({
        ct: i,
        nac: nac,
        mue: mue,
        pbol: pbolActual,
      });
    }
    this.pbolf = pbolActual;
  }
  validInputs(){
    if(this.ct == null) return false;
    if(this.tn == null) return false;
    if(this.tm == null) return false;
    if(this.tms == null) return false;
    if(this.pbol == null) return false;
    if(this.ct < 0) return false;
    if(this.tn < 0) return false;
    if(this.tm < 0) return false;
    if(this.tms < 0) return false;
    if(this.pbol < 0) return false;
    return true
  }
}
