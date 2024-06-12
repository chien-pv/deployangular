import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ContentComponent, DetailComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {}
