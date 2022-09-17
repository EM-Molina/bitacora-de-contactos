import { Component } from '@angular/core';

@Component({
    selector: 'Contactos',
    templateUrl: './contactos.component.html',
    styleUrls: ['./contactos.component.css']
})

export class Personas {

    personas: Persona[];

    constructor() {
        this.personas = [];
    }

    aniadirPersona(nombre: String, apellidos: String, edad: any, DPI: String) {

        let persona: Persona;

        if (edad === '') {
            edad = 0;
        }
        persona = new Persona(nombre, apellidos, edad, DPI);
        if (persona.esValido()) {
            this.personas.push(persona);
            console.log('Persona añadida');
        }else {
            console.log('Persona no valida');
        }


    }

    isEmpty() {
        return this.personas.length === 0;
    }

}

class Persona {

    nombre: String;
    apellidos: String;
    edad: Number;
    DPI: String;

    constructor(nombre: String, apellidos: String, edad: Number, DPI: String) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DPI = DPI;
    }

    esValido() {
        if (this.nombre === '' ||
            this.apellidos === '' ||
            this.edad === 0 ||
            this.DPI === '') {
                return false;
        }
        return true;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }

    mostrarInfo() {
        return 'Edad: ' + this.edad + ', DPI: ' + this.DPI;
    }

}
