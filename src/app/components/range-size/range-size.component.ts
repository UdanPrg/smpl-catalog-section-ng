import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-range-size',
  templateUrl: './range-size.component.html',
  styleUrls: ['./range-size.component.css']
})
export class RangeSizeComponent implements OnChanges {
  faCoffee = faCoffee;
  label = 'Size is:';
  size = this.storeService.size;

  @Output() sendCurrentSize = new EventEmitter<number>();
  constructor(
    private storeService: StoreService
  ){

  }
  ngOnChanges(changes: SimpleChanges){
    // console.log('ngOnChanges', 'size => ', this.size );
    console.log(changes);
  }
  changeSizeTitle(event: Event){
    const element = event.target as HTMLInputElement;
    this.storeService.size = parseInt(element.value);
    console.log(this.storeService.size)
  }
}
