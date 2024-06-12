import {
  Component,
  ViewChild,
  QueryList,
  ViewChildren,
  Output,
  EventEmitter,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ProductitemComponent } from '../productitem/productitem.component';
import { SearchComponent } from '../search/search.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ProductitemComponent,
    SearchComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  // @ViewChild(ProductitemComponent) childSearch!: ProductitemComponent;
  // @ViewChildren(ProductitemComponent)
  @Output() productItem = new EventEmitter<any>();
  viewChildrens!: QueryList<ProductitemComponent>;
  faFilter = faFilter;
  name = 'Iphone 14';
  params = '';
  handleClickItem(item: any) {
    console.log(item);
    this.productItem.emit(item);
  }
  getParamsSearch(q: string) {
    this.params = q;
  }
  listProduct = [
    {
      name: 'Iphone 11',
      price: 1123632424,
    },
    {
      name: 'Iphone 10',
      price: 6767676786,
    },
    {
      name: 'Iphone 13',
      price: 455655565,
    },
    {
      name: 'Iphone 12',
      price: 242455522,
    },
  ];
}
