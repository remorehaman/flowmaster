import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../network/apiservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {

  product_list:Array<any>
  pageNumber  = 1
  resData: any;
  showText:boolean;

  constructor(private apiService:ApiserviceService,) {
    this.product_list = [];
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllProducts(false, "");
    }, 3000);
  }

  getAllProducts(isFirstLoad, event){
    this.apiService.productList(this.pageNumber).subscribe(
      res => {
        if(res.errorCode == 0){
          this.resData = res.data;
          this.showText = true
          //console.log("product",this.resData)
          for (let i = 0; i < this.resData.length; i++) {
            this.product_list?.push(this.resData[i]);
          }
          if (isFirstLoad){
            event.target.complete();
            //console.log("new product : ", this.product_list);
          }
          this.pageNumber++;
        }
        else{
          event.target.disabled = true;
          //console.log(res.errorMessage)
        }
    });
  }
  
  doInfinite(event) {
    setTimeout(() => {
      this.getAllProducts(true, event);
    }, 2000);
  }
}
