import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private size: number = 20;
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
  constructor() { }
}
