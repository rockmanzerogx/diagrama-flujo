import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Ejemplo1Component } from './ejemplos/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './ejemplos/ejemplo2/ejemplo2.component';
import { Ejemplo3Component } from './ejemplos/ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplos/ejemplo4/ejemplo4.component';
import { Ejemplo5Component } from './ejemplos/ejemplo5/ejemplo5.component';
import { Ejemplo6Component } from './ejemplos/ejemplo6/ejemplo6.component';
import { Ejemplo7Component } from './ejemplos/ejemplo7/ejemplo7.component';
import { Ejemplo8Component } from './ejemplos/ejemplo8/ejemplo8.component';
import { Observable, Observer } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
export interface ExampleTab {
  label: string;
  content: string;
  component: any;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    //RouterLink,
    //RouterLinkActive,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    AsyncPipe,
    MatGridListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Ejemplo 1', component: Ejemplo1Component , content: 'ejemplo1'},
          {label: 'Ejemplo 2', component: Ejemplo2Component , content: 'ejemplo1'},
          {label: 'Ejemplo 3', component: Ejemplo3Component , content: 'ejemplo1'},
          {label: 'Ejemplo 4', component: Ejemplo4Component , content: 'ejemplo1'},
          {label: 'Ejemplo 5', component: Ejemplo5Component , content: 'ejemplo1'},
          {label: 'Ejemplo 6', component: Ejemplo6Component , content: 'ejemplo1'},
          {label: 'Ejemplo 7', component: Ejemplo7Component , content: 'ejemplo1'},
          {label: 'Ejemplo 8', component: Ejemplo8Component , content: 'ejemplo1'},
        ]);
      }, 0);
    });
  }
}
