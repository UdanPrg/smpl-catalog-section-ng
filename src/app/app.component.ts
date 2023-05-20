import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Uriel';
  age = 27;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'David',
    age: 26,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  };
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
}
