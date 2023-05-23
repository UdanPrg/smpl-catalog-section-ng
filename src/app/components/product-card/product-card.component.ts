import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
    image: ''
  };

  size: number = 20;
  countProducts = 0;

  constructor(
    private storeService: StoreService
  ){

  }
  ngOnInit(){
    this.storeService.rangeSize$.subscribe(size=>{
      this.size = size;
    })
  }
  changeSizeTitle(){
    // const element = event.target as HTMLInputElement;
    this.size = this.storeService.getsize();
  }
}
