import { Component, OnInit } from '@angular/core';
import {
  DiscountOffers,
  IProduct,
  ICategory,
} from '../shared-classes-and-types/shared-classes-and-types';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  // discount: DiscountOffers = DiscountOffers.No_Discounts;
  discount: DiscountOffers = DiscountOffers.tenPercent;
  ProductList: any = [];
  categories = ['LCD', 'Motor', 'Sensor'];
  isPurchased = false;
  Client: string = '';
  constructor(private productService: ProductServiceService) { }

  buy() {
    this.isPurchased = true;
    this.Client = this.Client;
  }


  ngOnInit(): void {
    this.ProductList = this.productService.GetAllProducts();
    this.renderValues();

  }
  renderValues(): void {
    this.productService.GetAllProducts().subscribe(
      (data: any) => {
      this.ProductList = data;
    });
  }
}
