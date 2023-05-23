import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  // changeRangeSize(){
  //   this.rangeSize.next(this.size)
  // }

  // @Output() sendCurrentSize = new EventEmitter<number>();

  // ngOnChanges(changes: SimpleChanges){
  //   console.log('ngOnChanges', 'size => ', this.size );
  //   console.log(changes);
  //   this.rangeSize.next(this.size)
  // }

  getsize(){
    return this.size;
  }
  private size: number = 24;
  private rangeSize = new BehaviorSubject<number>(this.size);

  rangeSize$ = this.rangeSize.asObservable();

  onchangeSizeTitle(event: Event){
    const element = event.target as HTMLInputElement;
    this.size = parseInt(element.value);
    this.rangeSize.next(this.size);
  }
  constructor() { }
}
