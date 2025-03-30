<<<<<<< HEAD
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
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  rating: number;
  link: string;
  likes: number;
}

interface Category{
  name:string;
  products:Product[];
}

@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule, FormsModule, ProductListComponent], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories: Category[]= [
    { name: 'Электроника', products: [] },
    { name: 'Сумки', products: [] },
    { name: 'Ювелирные изделия', products: [] },
    { name: 'Косметика', products: [] }
  ];

  selectedProducts: Product[] = [];

  constructor() {
    this.categories[0].products =[
      {
        id: 1,
        name: 'Apple iPhone 15 128GB',
        description: 'Флагманский смартфон Apple, черный цвет.',
        images: [
          'assets/p7.1.jpg', 
          'assets/p7.2.jpg', 
          'assets/p7.1.jpg'
        ],
        rating: 4.2,
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
        likes: 0
      },
      {
        id: 2,
        name: 'Amazon Kindle Paperwhite 2021',
        description: 'Электронная книга с подсветкой, 6.8 дюймов.',
        images: [
          'assets/p8.1.jpg', 
          'assets/p8.2.jpg', 
          'assets/p8.3.jpg'
        ],
        rating: 4.1,
        link: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-107940321/',
        likes: 0
      },
      {
        id: 3,
        name: 'Apple Watch SE 2 Gen 2022',
        description: 'Умные часы Apple, 40 мм, цвет Starlight.',
        images: [
          'assets/p9.1.jpg', 
          'assets/p9.2.jpg', 
          'assets/p9.3.jpg'
        ],
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
          images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/hfc/86225068687390.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h82/h17/86225068818462.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h7a/86225068949534.jpg?format=gallery-medium'],
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/remax-blok-zarjadki-zarjadka-dlja-telefona-belyi-120184540/?c=750000000',
          likes: 0
        },


    ]
    this.categories[1].products = [
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
        name: 'Сумка кросс-боди 7456' ,
        description: 'Искуственная кожа черный',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h19/h4d/87040702578718.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hdf/87040702644254.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/87040702709790.jpg?format=gallery-medium'],
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-7456-black1-iskusstvennaja-kozha-chernyi-109405033/?c=750000000',
        likes: 0
      }
    ];

    this.categories[2].products = [
      {
        id: 11,
        name: 'Серьги',
        description: 'Серебро, вес 3г , фианит',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hd1/h81/84165922258974.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5c/h0a/84165922324510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h40/hcc/84165922390046.jpg?format=gallery-medium'],
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/ser-gi-serebro-rossii-23401001077-ves-3-g-serebro-fianit-113768335/?c=750000000&tab=reviews',
        likes: 0
      },
      {
        id: 12,
        name: 'Кольцо',
        description: 'размер 18 вес 3.51г золото, фианит',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hed/h20/80713648570398.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h2b/80713648963614.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h89/80713649094686.jpg?format=gallery-medium'],
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/diamond-union-diamond-exclusive-razmer-18-ves-2-33-g-zoloto-fianit-110299589/?c=750000000',
        likes: 0
      },
      {
        id: 13,
        name: 'Браслет',
        description: 'Длина 20см, вес 2.06г серебро',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h4b/hd0/85056275054622.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h29/h8e/85056275251230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h00/85056275316766.jpg?format=gallery-medium'],
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/16332026-368496-dlina-20-sm-ves-2-06-g-serebro-pletenie-jakornoe-116333563/?c=750000000',
        likes: 0
      },
      {
        id: 14,
        name: 'Колье Serebrissimo',
        description: 'Длина 42см вес 1.2г серебро, эмаль',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa3/pc6/6286382.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pbf/pc6/6286383.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pdc/pc6/6286384.jpg?format=gallery-medium'],
        rating: 5,
        link: 'https://kaspi.kz/shop/p/kol-e-serebrissimo-s925-4-016-dlina-42-sm-ves-1-2-g-serebro-emal--112382979/?c=750000000',
        likes: 0
      },
      {
        id: 15,
        name: 'Серьги Лепестки' ,
        description: 'бижутерный сплав, без вставок',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hb7/h46/81270775021598.jpg?format=gallery-medium' , 'https://resources.cdn-kaspi.kz/img/m/p/he6/h9c/81270775480350.jpg?format=gallery-medium' , ' https://resources.cdn-kaspi.kz/img/m/p/h35/h02/81270775709726.jpg?format=gallery-medium'],
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/ser-gi-lepestki-bizhuternyi-splav-bez-vstavok-110853997/?c=750000000',
        likes: 0
      }
    ];

    this.categories[3].products = [
      {
        id: 16,
        name: 'KeKe Mood Lipstick ',
        description: 'помада коричневый 02',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hd5/hee/86477384319006.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hae/hc3/86477384384542.jpg?format=gallery-medium'],
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/keke-mood-lipstick-pomada-korichnevyi-02-121160489/?c=750000000',
        likes: 0
      },
      {
        id: 17,
        name: 'Belor design Multitalent set ',
        description: 'румяна, скульптор, хайлайтер, набор для контуринга 01',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hd5/hd5/85120032800798.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/hc0/85120032866334.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hce/h41/85120032931870.png?format=gallery-medium'],
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/belor-design-multitalent-set-rumjana-skul-ptor-hailaiter-nabor-dlja-konturinga-01-106946497/?c=750000000',
        likes: 0
      },
      {
        id: 18,
        name: 'Dior Backstage Glow Face Palette ',
        description: 'румяна, хайлайтер 001 Universal',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hc9/h63/84819210272798.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h16/h05/84819210338334.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h77/h83/84819210403870.jpg?format=gallery-medium'],
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/dior-backstage-glow-face-palette-rumjana-hailaiter-001-universal-102958071/?c=750000000',
        likes: 0
      },
      {
        id: 19,
        name: 'Rom&nd ',
        description: 'тинт для губ красный 23 NUCADAMIA',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h55/hb4/67413379416094.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h04/h14/67413379940382.jpg?format=gallery-medium'],
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/rom-nd-tint-dlja-gub-krasnyi-23-nucadamia-108262875/?c=750000000',
        likes: 0
      },
      {
        id: 10,
        name: 'Maybelline New York Cils Sensational Sky High' ,
        description: 'Тушь для ресниц удлиняющая черный',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/hb8/85209564053534.png?format=gallery-medium' , 'https://resources.cdn-kaspi.kz/img/m/p/hff/h51/85209564086302.png?format=gallery-medium' , 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h97/85209564119070.png?format=gallery-medium '],
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/maybelline-new-york-cils-sensational-sky-high-udlinjajuschaja-chernyi-101197393/?c=750000000',
        likes: 0
      }
    ];

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
>>>>>>> e46d3e32c406d3b9609e467e0d7a28c47fcc5c4c
