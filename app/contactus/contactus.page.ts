import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ApiserviceService } from '../network/apiservice.service';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  constructor(private apiService:ApiserviceService, private util: UtilService) { 
    this.util.loaderPromise('Please wait...');
  }

  contact_model:Contact
  contact_content: any

  ngOnInit() {

    this.apiService.getContentofContact().subscribe(
      res =>{
        this.contact_content = res;
        this.contact_model = this.contact_content.data
        console.log("contact->",this.contact_model)
      }
    )
  }

}
