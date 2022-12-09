import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Iron Man';
    edad  : number = 74;

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spider-man';
    }
    cambiarEdad(): void {
        this.edad = 24;
    }
}