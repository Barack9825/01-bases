import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get NombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 30;
  }
}
