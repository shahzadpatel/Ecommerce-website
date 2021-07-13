export class Product {
  id: string;
  sku: string | undefined;
  name: string | undefined;
  description: string | undefined;
  unitPrice: number | undefined
  imageURL: string;
  active: boolean | undefined;
  unitsInStock: number | undefined;
  dateCreated: Date | undefined;
  lastUpdated: Date | undefined;

}
