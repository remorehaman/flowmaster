import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../network/apiservice.service';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqList: Array<any>;

  constructor(private apiService:ApiserviceService, private util: UtilService) { 
    this.util.loaderPromise('Please wait...');
    this.faqList = [];
  }

  ngOnInit() {
    this.apiService.getFAQList().subscribe(
      res =>{
        if(res.errorCode == 0) {
          this.faqList = res.data;
        }
        //console.log("RES", res);
      }
    )
  }

}
