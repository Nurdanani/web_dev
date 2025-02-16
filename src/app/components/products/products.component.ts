import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-products',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Рюкзак WorldVerve WR608',
      description: 'Рюкзак из экокожи, коричневый цвет.',
      images: [
        'assets/p1.1.jpg', 
        'assets/p1.2.jpg', 
        'assets/p1.3.jpg'
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/rjukzak-worldverve-wr608-ekokozha-korichnevyi-132112812/'
    },
    {
      name: 'Сумка-шоппер',
      description: 'Большая черная сумка из экокожи.',
      images: [
        'assets/p2.1.jpg', 
        'assets/p2.2.jpg', 
        'assets/p2.3.jpg'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sumka-shopper-30036870-113388-ekokozha-chernyi-115225411/'
    },
    {
      name: 'Часы Romanson TM0361Q',
      description: 'Женские кварцевые часы, бронзовый цвет.',
      images: [
        'assets/p10.1.jpg', 
        'assets/p10.2.jpg', 
        'assets/p10.3.jpg'
      ],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/kvartsevye-romanson-tm0361qbronze-woman-nerzhavejuschaja-stal--134632474/'
    },
    {
      name: 'Мини-сумка натуральная кожа',
      description: 'Маленькая черная сумка из натуральной кожи.',
      images: [
        'assets/p3.1.jpg', 
        'assets/p3.2.jpg', 
        'assets/p3.3.jpg'
      ],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/mini-sumka-17589077-737166-natural-naja-kozha-chernyi-109541031/'
    },
    {
      name: 'Клатч золотистый',
      description: 'Женский вечерний клатч из искусственной кожи.',
      images: [
        'assets/p4.1.jpg', 
        'assets/p4.2.jpg', 
        'assets/p4.3.jpg'
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/klatch-9460004-359644-iskusstvennaja-kozha-zolotistyi-113120578/'
    },
    {
      name: 'Очки KDEAM',
      description: 'Модные овальные очки белого цвета.',
      images: [
        'assets/p5.1.jpg', 
        'assets/p5.2.jpg', 
        'assets/p5.3.jpg'
      ],
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/kdeam-ochki-kart-e-belye-r-f-0098653-oval-nye-odnotonnye-118697523/'
    },
    {
      name: 'Бриллиант 15.05 г золото',
      description: 'Ювелирное украшение из золота с бриллиантом.',
      images: [
        'assets/p6.1.jpg', 
        'assets/p6.2.jpg', 
        'assets/p6.3.jpg'
      ],
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/brilliant-m1241-ves-15-05-g-zoloto-brilliant-112772728/'
    },
    {
      name: 'Apple iPhone 15 128GB',
      description: 'Флагманский смартфон Apple, черный цвет.',
      images: [
        'assets/p7.1.jpg', 
        'assets/p7.2.jpg', 
        'assets/p7.1.jpg'
      ],
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      name: 'Amazon Kindle Paperwhite 2021',
      description: 'Электронная книга с подсветкой, 6.8 дюймов.',
      images: [
        'assets/p8.1.jpg', 
        'assets/p8.2.jpg', 
        'assets/p8.3.jpg'
      ],
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-107940321/'
    },
    {
      name: 'Apple Watch SE 2 Gen 2022',
      description: 'Умные часы Apple, 40 мм, цвет Starlight.',
      images: [
        'assets/p9.1.jpg', 
        'assets/p9.2.jpg', 
        'assets/p9.3.jpg'
      ],
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/'
    }
  ];

  shareWhatsApp(link: string) {
    window.open('https://wa.me/?text=' + encodeURIComponent(link), '_blank');
  }

  shareTelegram(link: string) {
    window.open('https://t.me/share/url?url=' + encodeURIComponent(link), '_blank');
  }
}
