import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  changeName(prod, newName ) {
    prod.name += newName;
  }

  share(prod ) {
    window.alert('The product: ' + prod.name+' has been shared!');
  }

}
 