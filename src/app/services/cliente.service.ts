import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): any {
    return [
      { id: 1, nombre: 'Nicolas' },
      { id: 2, nombre: 'Javier' },
      { id: 3, nombre: 'Fernando' }]
  }
}
