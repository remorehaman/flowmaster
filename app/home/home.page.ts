import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ApiserviceService } from '../network/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{



siteUrl = environment.SLIDER_URL

constructor(private apiService:ApiserviceService, private route:ActivatedRoute) {

  //this.pageNumber = 1
  //this.productList = 
 

}

ngOnInit(): void {

  
}






}
