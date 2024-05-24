import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';


@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})

export class Component2Component implements OnInit {
  clientes: any[] = [];
  constructor(service: ClienteService) {
    this.clientes = service.getClientes();
  }
  ngOnInit(): void {
  }
}

