import { Component } from '@angular/core';
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

import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
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
}
