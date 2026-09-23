import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectColorComponent } from '../select-color/select-color.component';

/*
 * LACES SECTION (Task b)
 *
 * Mirrors empiretextiles.com/products/laces.
 * It does NOT build its own colour picker - it renders the shared
 * SelectColorComponent (Task d) and just hands it the lace colours.
 */
@Component({
  selector: 'app-laces',
  standalone: true,
  imports: [CommonModule, SelectColorComponent],
  templateUrl: './laces.component.html',
  styleUrl: './laces.component.css',
})
export class LacesComponent {
  laceColors: string[] = ['#ffffff', '#f5e6c8', '#c9a227', '#b03a48', '#1f3a93', '#2e7d32'];

  products = [
    { name: 'Swiss Voile Lace', price: '₦45,000' },
    { name: 'French Corded Lace', price: '₦62,000' },
    { name: 'Bridal Guipure Lace', price: '₦78,500' },
  ];
}
