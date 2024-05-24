import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component2Component } from './pages/home/component2/component2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto 1 - Angular';
}

