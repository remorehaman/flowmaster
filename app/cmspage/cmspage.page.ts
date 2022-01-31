import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-response';
import { CmsContent } from '../models/cms-content';
import { ApiserviceService } from '../network/apiservice.service';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-cmspage',
  templateUrl: './cmspage.page.html',
  styleUrls: ['./cmspage.page.scss'],
})
export class CmspagePage implements OnInit {

  currSlug: string;
  SITE_URL = environment.SITE_URL

  permalink :any
  contentBySlug:BaseResponse
  cmsContentData : Array<CmsContent>
  constructor(
    private restApi:ApiserviceService, 
    private route:ActivatedRoute,
    private util: UtilService,

  ) {
    this.util.loaderPromise('Please wait...');
  }

  ngOnInit() {

    this.route.params.subscribe(
      (param:Params) =>{
        this.permalink = param['permalink']
        this.restApi.getContentBySlug(this.permalink).subscribe(
          res => {
            if(res.errorCode == 0) {
              this.contentBySlug = res;
              this.cmsContentData = this.contentBySlug.data;
              //console.log(this.cmsContentData);
            }
          }
       )
      }
    )
  }

}
