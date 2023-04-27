// Inside Shared Classes and types folder

// IProduct interface
export interface IProduct {
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    Img: string;
  }
  
  // ICategory interface
  export interface ICategory {
    ID: number;
    Name: string;
  }
  
  // DiscountOffers enum
  export enum DiscountOffers {
    "No Discount",
    "10%",
    "15%"
  }
  