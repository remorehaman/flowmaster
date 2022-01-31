import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Gallery } from '../models/gallery';
import { Product } from '../models/product';
import { ProductAttribute, ProductDetails } from '../models/productDetailts';
import { Productsize } from '../models/productsize';
import { ApiserviceService } from '../network/apiservice.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.page.html',
  styleUrls: ['./productdetail.page.scss'],
})
export class ProductdetailPage implements OnInit {

  permalink:string = '';
  productDetails: ProductDetails = null;
  gallery:Array<Gallery> = [];
  size:Productsize = null;
  productData:Product ;
  productAttribute:Array<ProductAttribute>;
  productAttributeSize: Array<Productsize> = [];
  relatedProduct: Array<Product> = [];
  showQuantity: boolean = false
  showCartbtn: boolean = false
  showtypes: boolean = false
  attrPrice:string = ""
  
  siteUrl = environment.SLIDER_URL


  constructor(private apiService:ApiserviceService, private route:ActivatedRoute) {

    this.productData = <Product> {};

   }

  ngOnInit() {

    this.permalink = this.route.snapshot.params['permalink']

    this.apiService.getProductDetails(this.permalink).subscribe(
      res=>{
        if(res.errorCode == 0){
          this.productDetails         = res.data;
          this.productData            = this.productDetails.record;
          this.gallery                = this.productDetails.galleries;
          this.size                   = this.productDetails.sizeSet;
          this.relatedProduct         = this.productDetails.relatedProducts;
          this.productAttribute       = this.productDetails.attribute;
          this.productAttributeSize   = this.productDetails.sizeSet[this.productDetails.attribute[0].attributeType];
          this.attrPrice              = this.productAttributeSize[0].attributePrice
          this.showQuantity           = true
          this.showCartbtn            = true
          this.showtypes              = true

          // console.log("attribute",this.productAttribute)
         // console.log("related products",this.relatedProducts)
          // console.log('product record',this.productData)
          // console.log("productQuantity",this.productData?.productQuantity);
          // console.log('productsize',this.size)
          // console.log('gallries',this.gallery)
          console.log("price",this.attrPrice)
          console.log("product_details",this.productDetails)
        }
        
      }
    )
   

  }

  typeDropDownChanged(selectedIndex) {
    console.log("Index", selectedIndex);
    this.productAttributeSize = this.productDetails.sizeSet[this.productDetails.attribute[selectedIndex].attributeType];
    this.attrPrice         = this.productAttributeSize[0].attributePrice
    console.log("showprice",this.attrPrice)
  }
  attrpriceChange(priceindex){
    console.log("priceindex",priceindex)
    this.attrPrice         = this.productAttributeSize[priceindex].attributePrice
    console.log("showprice",this.attrPrice)
  }

  addtoCart(){
    
  }


 
  
  countQuantity:number = 1; 
  i = 1;

  increase(){
    if(this.i < parseInt(this.productData.productQuantity)){
      this.i++;
      this.countQuantity = this.i
    }
    else if(this.i == parseInt(this.productData.productQuantity)){
      alert("You have reached maximum quantity");
      
    }
  }

  derease(){
    if(this.i > 1){
      this.i--;
      this.countQuantity = this.i;
    }
    else if(this.i == 1){
      alert("minimum")
    }
  }
}
