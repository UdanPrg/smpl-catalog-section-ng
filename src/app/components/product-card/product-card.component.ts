import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title:'',
    price: '',
    category: '',
    description: '',
    image: '',
    quantity: 0
  };
  // key: number = 0;

  currentSize = 20;
  countProducts = 0;

  constructor(
    private storeService: StoreService
  ){

  }
  ngOnInit(){
    this.storeService.rangeSize$.subscribe(size => {
      this.currentSize = size;
    })
  }
  onChangeTitle(title: string){
    this.product.title = title
  }
  onAddToCart(product: Product){
    // console.log(this.countProducts)
    this.storeService.addProductsToCart(product);
    console.log(product);
  }
}
