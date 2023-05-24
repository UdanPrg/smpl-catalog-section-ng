import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ){ }

  ngOnInit(): void{
    this.productsService.getAllProducts()
    .subscribe(data=>{
      // console.log(data)
      this.products = data;
    })
  }
}
