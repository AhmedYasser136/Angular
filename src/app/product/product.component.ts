import { Component } from '@angular/core';
import { DiscountOffers, IProduct, ICategory } from '../shared-classes-and-types/shared-classes-and-types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  Discount: DiscountOffers = DiscountOffers['No Discount'];
  // StoreName: string = "A.IOT";
  // StoreLogo: string = "https://cdn3.emoji.gg/emojis/1946_anemo.png";
  ProductList: IProduct[] = [
    { ID: 1, Name: "Product 1", Quantity: 10, Price: 100, Img: "https://lampatronics.com/wp-content/uploads/2022/04/rpi_pico.jpg" },
    { ID: 2, Name: "Product 2", Quantity: 5, Price: 50, Img: "https://lampatronics.com/wp-content/uploads/2022/04/rpi_pico.jpg" },
    { ID: 3, Name: "Product 3", Quantity: 3, Price: 20, Img: "https://lampatronics.com/wp-content/uploads/2022/04/rpi_pico.jpg" },
  ];
  CategoryList: ICategory[] = [
    { ID: 1, Name: "Category 1" },
    { ID: 2, Name: "Category 2" },
    { ID: 3, Name: "Category 3" },
  ];
  ClientName: string = "Ahmed Yasser";
  IsPurchased: boolean = false;
}
