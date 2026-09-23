import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * REUSABLE COMPONENT (Task c)
 *
 * On empiretextiles.com both /products/laces and /products/shoes-and-bags
 * show the SAME thing: a "Select Color" swatch list. Only the list of
 * colours and the heading change.
 *
 * So instead of writing the colour picker twice, it is built once here and
 * the colours are passed in with @Input(). Any future product section can
 * reuse it the same way.
 */
@Component({
  selector: 'app-select-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-color.component.html',
  styleUrl: './select-color.component.css',
})
export class SelectColorComponent {
  /** Colours supplied by the parent section (laces, shoes and bags, ...). */
  @Input() colors: string[] = [];

  /** Heading text, so each section can label its picker differently. */
  @Input() label = 'Select Color';

  /** The colour the shopper has clicked. */
  selectedColor = '';

  selectColor(color: string): void {
    this.selectedColor = color;
  }
}
