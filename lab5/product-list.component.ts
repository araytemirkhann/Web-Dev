import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  startptod = products;
  selectedCat = 0;
  applyd(){
    this.products = this.startptod;
    if (this.selectedCat == 0){
      this.products = this.products.filter((x) => x.cat === 1 || x.cat === 2 || x.cat === 3 || x.cat === 4);
    }
    else{
      // tslint:disable-next-line:triple-equals
      this.products = this.products.filter((x) => x.cat == this.selectedCat);
    }

  }
  share(product) {
    window.open(`https://t.me/share/url?url=${product.link}`);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  remove(index: number){
    this.startptod = this.startptod.filter((x) => x.id !== index);
    this.applyd();
  }
  like(product){
    const index = this.startptod.indexOf(product);
    this.startptod[index].likes++;
    this.applyd();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/