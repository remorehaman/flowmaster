import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HomeSlider } from '../models/home-slider';
import { ApiserviceService } from '../network/apiservice.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  constructor(private apiService:ApiserviceService) { }

  siteUrl = environment.SLIDER_URL

  slider:Array<HomeSlider>

  ngOnInit() {


    this.apiService.bannerSlider().subscribe(
      res => {
        this.slider = res.data
        console.log("banner_slider",this.slider)
      }
    )

  }

}
