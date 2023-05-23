import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.css']
})
export class ProductSectionComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'EL mejor juguete',
      price: '565',
      category: '',
      description: '',
      image: './assets/images/toy.jpg'
    },
    {
      id: 2,
      title: 'Bicicleta casi nueva',
      price: '356',
      category: '',
      description: '',
      image: './assets/images/bike.jpg'
    },
    {
      id: 3,
      title: 'Colleción de albumnes',
      price: '34',
      category: '',
      description: '',
      image: './assets/images/album.jpg'
    },
    {
      id: 4,
      title: 'Mis libros',
      price: '23',
      category: '',
      description: '',
      image: './assets/images/books.jpg'
    },
    {
      id: 5,
      title: 'Casa para perro',
      price: '34',
      category: '',
      description: '',
      image: './assets/images/house.jpg'
    },
    {
      id: 6,
      title: 'Gafas',
      price: '33',
      category: '',
      description: '',
      image: './assets/images/glasses.jpg'
    }
  ];

  // sizeTitle = 20;
  // currentSizeTitle(size: number){
  //   // this.sizeTitle = this.sizeTitle;
  //   console.log(size)
  //   // this.sizeTitle = size;
  //   // console.log(this.sizeTitle);
  // }

}
