// Inside Shared Classes and types folder

// IProduct interface
export interface IProduct {
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
  }
  
  // ICategory interface
  export interface ICategory {
    ID: number;
    Name: string;
  }
  
  // DiscountOffers enum
  export enum DiscountOffers {
    No_Discounts = 0 ,
    tenPercent = 0.1,
    fiftenPercent = 0.15
}