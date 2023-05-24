import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // @Input() product: Product = {
  //   id: 0,
  //   title:'',
  //   price: '',
  //   category: '',
  //   description: '',
  //   image: '',
  //   quantity: 0
  // };

  private size = 20;
  private rangeSize = new BehaviorSubject<number>(this.size);
  rangeSize$ = this.rangeSize.asObservable();
  getsize(){
    return this.size;
  }
  onchangeSizeTitle(event: Event){
    const element = event.target as HTMLInputElement;
    this.size = parseInt(element.value);
    this.rangeSize.next(this.size);
  }


  countProducts = 0;
  producstOnCart: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([])
  cart$ = this.cart.asObservable()

  sendCount(event: Event){
    const c = event.target as HTMLInputElement;
    this.countProducts = parseInt(c.value);
  }
  addProductsToCart(product: Product){
    this.producstOnCart.push(product);
    this.cart.next(this.producstOnCart);
    this.countProducts
  }
  getTotal(){
    // return this.producstOnCart.reduce((sum, item) => sum + item.price, 0)
  }


//   funAddToCart() {
//     if(this.countProducts === 0){
//         return;
//     }
//     // Crea un objeto con la información del producto
//     const product = {
//         id: this.producstOnCart.id,
//         title: this.producstOnCart.title,
//         price: this.producstOnCart.price,
//         image: this.producstOnCart.image,
//         quantity: this.countProducts
//     };

//     const productoExistente = this.producstOnCart.find(p => p.id === this.product.id);

//     if (productoExistente) {
//         // Actualizar la cantidad del producto existente en el carrito
//         const nuevosProductos = this.producstOnCart.map(p => {
//             if (p.id === this.product.id) {
//                 return { ...p, quantity: p.quantity + this.countProducts };
//             } else {
//                 return p;
//             }
//         });
//         this.producstOnCart = nuevosProductos;
//     } else {
//         // Agregar el nuevo producto al carrito
//         this.producstOnCart = [...this.producstOnCart, product]
//     }
// };

// constructor() { }
}
