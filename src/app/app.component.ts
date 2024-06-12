import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faSort,
  faHouse,
  faMagnifyingGlass,
  faFilter,
  faBell,
  faChevronDown,
  faMugHot,
  faUser,
  faGhost,
} from '@fortawesome/free-solid-svg-icons';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './detail/detail.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    FontAwesomeModule,
    SidebarComponent,
    ContentComponent,
    CommonModule,
    DetailComponent,
    UserinfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  faUser = faUser;
  faGhost = faGhost;
  faMugHot = faMugHot;
  faCoffee = faCoffee;
  faSort = faSort;
  faHouse = faHouse;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;
  faBell = faBell;
  faChevronDown = faChevronDown;
  productInfo = {};

  getProductItem(item: any) {
    this.productInfo = item;
  }
}
