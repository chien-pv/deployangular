import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-productinfo',
  standalone: true,
  imports: [],
  templateUrl: './productinfo.component.html',
  styleUrl: './productinfo.component.css',
})
export class ProductinfoComponent implements OnInit, OnChanges, DoCheck {
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:  ', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  count = 1;
  handleClickCount() {
    this.count = this.count + 1;
  }
}
