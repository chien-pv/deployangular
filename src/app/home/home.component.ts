import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private autheService: AuthenService) {}
  p = 1;
  list = ['Sản Phẩm 1', 'Sản Phẩm 2', 'Sản Phẩm 3', 'Sản Phẩm 4', 'Sản Phẩm 5'];

  ngOnInit(): void {
    this.autheService.getAllProduct().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
