import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectColorComponent } from '../select-color/select-color.component';

/*
 * SHOES AND BAGS SECTION (Task b)
 *
 * Mirrors empiretextiles.com/products/shoes-and-bags.
 * Same structure as the laces section, and it reuses the very same
 * SelectColorComponent (Task d) with a different colour list - which is
 * exactly the commonality the assignment asked us to identify.
 */
@Component({
  selector: 'app-shoes-and-bags',
  standalone: true,
  imports: [CommonModule, SelectColorComponent],
  templateUrl: './shoes-and-bags.component.html',
  styleUrl: './shoes-and-bags.component.css',
})
export class ShoesAndBagsComponent {
  bagColors: string[] = ['#000000', '#8b5e3c', '#c0392b', '#d4af37', '#e8d8c3', '#4a4e69'];

  products = [
    { name: 'Classic Heel & Clutch Set', price: '₦85,000' },
    { name: 'Beaded Party Bag Set', price: '₦110,000' },
    { name: 'Bridal Shoe & Purse Set', price: '₦135,000' },
  ];
}
