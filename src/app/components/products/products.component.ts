import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  rating: number;
  link: string;
  likes: number;
}

interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http = inject(HttpClient);

  categories: Category[] = [
    {
      name: 'Электроника',
      products: [
        {
          id: 1,
          name: 'Apple iPhone 15 128GB',
          description: 'Флагманский смартфон Apple, черный цвет.',
          images: ['assets/p7.1.jpg', 'assets/p7.2.jpg', 'assets/p7.1.jpg'],
          rating: 4.2,
          link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
          likes: 0
        },
        {
          id: 2,
          name: 'Amazon Kindle Paperwhite 2021',
          description: 'Электронная книга с подсветкой, 6.8 дюймов.',
          images: ['assets/p8.1.jpg', 'assets/p8.2.jpg', 'assets/p8.3.jpg'],
          rating: 4.1,
          link: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-107940321/',
          likes: 0
        },
        {
          id: 3,
          name: 'Apple Watch SE 2 Gen 2022',
          description: 'Умные часы Apple, 40 мм, цвет Starlight.',
          images: ['assets/p9.1.jpg', 'assets/p9.2.jpg', 'assets/p9.3.jpg'],
          rating: 4.0,
          link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/',
          likes: 0
        },
        {
          id: 4,
          name: 'Apple Iphone 13 128Gb',
          description: 'Флагманский смартфон Apple, белый цвет.',
          images: ['assets/pp1.png', 'assets/pp11.png', 'src/assets/p12.png'],
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
          likes: 0
        },
        {
          id: 5,
          name: 'Remax Блок зарядки',
          description: 'Зарядка для телефона белый ',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h73/hfc/86225068687390.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h82/h17/86225068818462.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h35/h7a/86225068949534.jpg?format=gallery-medium'
          ],
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/remax-blok-zarjadki-zarjadka-dlja-telefona-belyi-120184540/?c=750000000',
          likes: 0
        }
      ]
    },
    {
      name: 'Сумки',
      products: [
        {
          id: 6,
          name: 'Рюкзак WorldVerve WR608',
          description: 'Рюкзак из экокожи, коричневый цвет.',
          images: ['assets/p1.1.jpg', 'assets/p1.2.jpg', 'assets/p1.3.jpg'],
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/rjukzak-worldverve-wr608-ekokozha-korichnevyi-132112812/',
          likes: 0
        },
        {
          id: 7,
          name: 'Сумка-шоппер',
          description: 'Большая черная сумка из экокожи.',
          images: ['assets/p2.1.jpg', 'assets/p2.2.jpg', 'assets/p2.3.jpg'],
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/sumka-shopper-30036870-113388-ekokozha-chernyi-115225411/',
          likes: 0
        },
        {
          id: 8,
          name: 'Мини-сумка натуральная кожа',
          description: 'Маленькая черная сумка из натуральной кожи.',
          images: ['assets/p3.1.jpg', 'assets/p3.2.jpg', 'assets/p3.3.jpg'],
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/mini-sumka-17589077-737166-natural-naja-kozha-chernyi-109541031/',
          likes: 0
        },
        {
          id: 9,
          name: 'Клатч золотистый',
          description: 'Женский вечерний клатч из искусственной кожи.',
          images: ['assets/p4.1.jpg', 'assets/p4.2.jpg', 'assets/p4.3.jpg'],
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/klatch-9460004-359644-iskusstvennaja-kozha-zolotistyi-113120578/',
          likes: 0
        },
        {
          id: 10,
          name: 'Сумка кросс-боди 7456',
          description: 'Искуственная кожа черный',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h19/h4d/87040702578718.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0d/hdf/87040702644254.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/87040702709790.jpg?format=gallery-medium'
          ],
          rating: 4.6,
          link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-7456-black1-iskusstvennaja-kozha-chernyi-109405033/?c=750000000',
          likes: 0
        }
      ]
    },
    { name: 'Ювелирные изделия', products: [] },
    { name: 'Косметика', products: [] }
  ];

  selectedProducts: Product[] = [];

  constructor() {
    this.selectedProducts = this.categories[0].products;
    this.loadServerProducts();
  }

  loadServerProducts() {
    this.http.get<Product[]>('http://127.0.0.1:8000/api/products/').subscribe((data) => {
      if (data.length > 0) {
        this.categories.push({ name: 'Серверные товары', products: data });
      }
    });
  }

  shareWhatsApp(link: string) {
    window.open('https://wa.me/?text=' + encodeURIComponent(link), '_blank');
  }

  shareTelegram(link: string) {
    window.open('https://t.me/share/url?url=' + encodeURIComponent(link), '_blank');
  }

  selectCategory(category: any) {
    this.selectedProducts = category.products;
  }

  onRemoveProduct(productId: number) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
  }

  likeProduct(product: Product) {
    product.likes++;
  }
}
