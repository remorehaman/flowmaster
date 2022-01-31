import { Gallery } from "./gallery";
import { Product } from "./product";
import { Productsize } from "./productsize";

export interface ProductDetails{

    record:Product;
    relatedProducts:Array<Product>;
    attribute:Array<ProductAttribute>;
    galleries:Array<Gallery>
    sizeSet:Productsize
}

export interface ProductAttribute{
    attributeType:string
}
