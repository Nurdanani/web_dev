import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  changeImage(newImage: string) {
    this.product.images[0] = newImage;
  }

  likeProduct() {
    this.product.likes++;
  }

  removeItem() {
    this.remove.emit(this.product.id);
  }

  shareWhatsApp(link: string) {
    window.open('https://wa.me/?text=' + encodeURIComponent(link), '_blank');
  }

  shareTelegram(link: string) {
    window.open('https://t.me/share/url?url=' + encodeURIComponent(link), '_blank');
  }
}
