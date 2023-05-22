import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = './assets/images/toy.jpg';

  imgError(){
    this.img = this.imageDefault
  }
  imgLoad(){
    console.log('log hijo!')
    this.loaded.emit(this.img);
  }
}
