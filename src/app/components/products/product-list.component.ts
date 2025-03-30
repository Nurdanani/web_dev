import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
interface Product {
    id: number;
    name: string;
    description: string;
    images: string[];
    rating: number;
    link: string;
    likes: number;
  }
  
  @Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductItemComponent],
    template:
     `<div class="product-container">
        <app-product-item 
        *ngFor="let product of products"
        [product] = "product"
        (remove) = "handleRemove($event)">
        </app-product-item>
      </div>
          `,
 styleUrls: ['./product-list.component.css'] 
  })

  export class ProductListComponent{
    @Input() products: Product[] = [];
    @Output() remove = new EventEmitter<number>();

    handleRemove(productId: number){
        this.remove.emit(productId);
    }
  }
   

