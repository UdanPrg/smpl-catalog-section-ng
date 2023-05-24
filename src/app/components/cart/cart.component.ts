import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from 'src/app/models/product.model';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  countIndividualProduct = 0

  faShoppingBag = faShoppingBag;
  shoppingActive = false;
  onChangeSBag(){
    this.shoppingActive = !this.shoppingActive;
  }
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ){  }


  // onGetCountProduct(count: number){
  //   this.onChangeTitle.getCountProducts();
  // }
  ngOnInit(){
    this.storeService.cart$.subscribe(product=>{
      this.products = product;
      console.log(this.products)
    })
    // this.productsService.getAllProducts()
    // .subscribe(data=>{
    //   // console.log(data)
    //   this.products = data;
    // })
  }
}
