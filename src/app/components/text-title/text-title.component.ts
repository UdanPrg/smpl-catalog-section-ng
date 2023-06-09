import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-title',
  templateUrl: './text-title.component.html',
  styleUrls: ['./text-title.component.css']
})
export class TextTitleComponent {
  @Input() currentTitle = '';
  @Output() changeTitle = new EventEmitter<string>()

  funChangeTitle(event: Event){
    const e = event.target as HTMLInputElement;
    this.currentTitle = e.value;
    this.changeTitle.emit(this.currentTitle);
  }
}
