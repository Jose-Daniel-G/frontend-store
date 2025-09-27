import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../ui/header/header.component';
import ProductListComponent from '../../products/features/product-list/product-list.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, ProductListComponent],
  templateUrl: './layout.component.html',
})
export default class LayoutComponent {

}
