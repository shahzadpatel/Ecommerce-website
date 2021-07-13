import { Product } from "./product";

export class CartItem {
  id: string;
  name: string | undefined;
  imageURL: string;
  unitPrice: number | undefined;

  quantity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.imageURL = product.imageURL;
    this.unitPrice = product.unitPrice;

    this.quantity = 1;
  }
}
