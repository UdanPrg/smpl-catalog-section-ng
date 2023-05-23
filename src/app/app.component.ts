import { Component, Output, EventEmitter } from '@angular/core';
import { ProductExample } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showImage = true;

  imageParent = '';
  widthImg = 10;
  name = 'Uriel';
  age = 27;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'David',
    age: 26,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };
  register = {
    name:'',
    email:'',
    password: ''
  };
  names: string[] = ['Uriel', 'David', 'Santiago'];
  newName:string = '';
  box = {
    width: 100,
    height: 100,
    background: '#F00'
  };
  productsExample: ProductExample[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all'
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  toogleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index:number){
    this.names.splice(index, 1)
  }
  onRegister(){
    console.log(this.register)
  }

  onLoaded(img: string){
    console.log('log padre', img)
  }
  toogleImg(){
    this.showImage = !this.showImage;
  }
}
