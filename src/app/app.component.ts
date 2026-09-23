import { Component } from '@angular/core';
import { LacesComponent } from './laces/laces.component';
import { ShoesAndBagsComponent } from './shoes-and-bags/shoes-and-bags.component';

/*
 * ROOT COMPONENT (Task e)
 * Renders the two section components inside app.component.html.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LacesComponent, ShoesAndBagsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-first-ecommerce';
}
