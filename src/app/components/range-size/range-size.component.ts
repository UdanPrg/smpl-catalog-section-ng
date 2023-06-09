import { Component } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-range-size',
  templateUrl: './range-size.component.html',
  styleUrls: ['./range-size.component.css']
})
export class RangeSizeComponent {
  faCog = faCog;
  label = 'Size is:';
  size = 24;
  cogActive = false;

  constructor(
    private storeService: StoreService
  ){
    this.size = this.storeService.getsize();
  }

  changeSizeTitle(event: Event){
    this.storeService.onchangeSizeTitle(event)
  }

  onChangeCog(){
    this.cogActive = !this.cogActive;
  }
}
