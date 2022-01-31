import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductDetails } from '../models/productDetailts';
import { ApiserviceService } from '../network/apiservice.service';

@Component({
  selector: 'app-relatedproduct',
  templateUrl: './relatedproduct.component.html',
  styleUrls: ['./relatedproduct.component.scss'],
})
export class RelatedproductComponent implements OnInit {

  @Input('relatedProduct') relatedProduct: Array<Product>;

  constructor() { }

  ngOnInit() {

  }

}