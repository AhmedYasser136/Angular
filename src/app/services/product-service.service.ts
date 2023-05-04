import { Injectable } from '@angular/core';
import { IProduct } from '../shared-classes-and-types/shared-classes-and-types';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }


  private products: IProduct[] = [
    { ID: 1, Name: "Raspberry Pi Pico", Quantity: 10, Price: 100, Img: "https://lampatronics.com/wp-content/uploads/2022/04/rpi_pico.jpg" },
    { ID: 2, Name: "TFT LCD", Quantity: 5, Price: 50, Img: "https://lampatronics.com/wp-content/uploads/2022/04/rpi_pico.jpg" },
    { ID: 3, Name: "Hot Air", Quantity: 3, Price: 20, Img: "https://lampatronics.com/wp-content/uploads/2022/04/rpi_pico.jpg" },
  ];


  GetAllProducts():Observable<IProduct[]>{
    return of(this.products);
  }

  GetProductById(prdId: number): IProduct | null {
    if (isNaN(prdId)) {
      return null;
    }

    const product = this.products.find((p) => p.ID === prdId);

    if (!product) {
      return null;
    }

    return product;

  }
}