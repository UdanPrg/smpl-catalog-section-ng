import { Injectable, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnChanges {

  size:number = 24;

  private range = new BehaviorSubject<number>(this.size);
  range$ = this.range.asObservable();

  changeRange(){
    this.range.next(this.size)
  }

  // @Output() sendCurrentSize = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges', 'size => ', this.size );
    console.log(changes);
    this.range.next(this.size)
  }
  // changeSizeTitle(event: Event){
  //   const element = event.target as HTMLInputElement;
  //   this.size = parseInt(element.value);
  //   this.sendCurrentSize.emit(this.size);
  // }

  constructor() { }
}
