import { Component } from '@angular/core';
import { DiscountOffers, IProduct, ICategory } from '../shared-classes-and-types/shared-classes-and-types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  // discount: DiscountOffers = DiscountOffers.No_Discounts;
  discount: DiscountOffers = DiscountOffers.tenPercent;


  ProductList: IProduct[] = [
    { ID: 1, Name: "Raspberry Pi Pico", Quantity: 10, Price: 100 },
    { ID: 2, Name: "TFT LCD", Quantity: 5, Price: 50 },
    { ID: 3, Name: "Hot Air", Quantity: 3, Price: 20 },
  ];



  categories = ['LCD', 'Motor', 'Sensor'];

  isPurchased = false;
  Client: string = "";

  buy() {
    this.isPurchased = true;
    this.Client = this.Client; 
  }

  // ClientName: string = "Ahmed Yasser";
  // IsPurchased: boolean = false;
}
