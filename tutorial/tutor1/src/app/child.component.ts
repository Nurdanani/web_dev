import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="addItem()">Add Item</button>`,
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>(); 

  addItem() {
    this.addItemEvent.emit('🐢'); 
}}
