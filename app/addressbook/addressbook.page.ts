import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Address } from '../models/address';
import { ApiserviceService } from '../network/apiservice.service';
import { ToastService } from '../network/toast.service';

@Component({
  selector: 'app-addressbook',
  templateUrl: './addressbook.page.html',
  styleUrls: ['./addressbook.page.scss'],
})
export class AddressbookPage implements OnInit {

  addressModel:Address = new Address()
  submitted = false;
  addSuccess = false;
  outputData:any;
  addressdata:any

  constructor(private apiService:ApiserviceService, private route:ActivatedRoute,
    public loadingCtrl: LoadingController,private ionicToastService:ToastService) { }

  ngOnInit() {

    this.addressdata =  JSON.parse(localStorage.getItem("userData")!)
    console.log("user-addressdata",this.addressdata);


  }


  async addressadd(){

    const loading = await this.loadingCtrl.create(
      {
        message:"Plesae wait...",
        spinner:'bubbles'
      });

      await loading.present()

    if (this.addressModel.formGroup.valid){
      var formData= new FormData();

      formData.append('fId',this.addressdata.id);
      console.log('id',this.addressdata.id)

      //formData.append('id',this.addressdata.id);

      formData.append('fullname',this.addressModel.fullname);
      // formData.append('email',this.addressModel.email);
      formData.append('phone',this.addressModel.phone);
      formData.append('address',this.addressModel.address);
      formData.append('country',this.addressModel.country);
      formData.append('state',this.addressModel.state);
      //formData.append('state',this.addressModel.city);
      formData.append('zip',this.addressModel.zip);
      //formData.append('state',this.addressModel.landmark);
      this.apiService.add_editAddress(formData).subscribe(
        data => {
          this.outputData = data;
          if(this.outputData.errorCode == 0){
            
            console.log("user", this.outputData)

           this.loadingCtrl.dismiss().then(() => console.log('dismissed'));

            this.ionicToastService.showToast()

             // --------storing data in local storage----
            localStorage.setItem('addressdata',JSON.stringify(this.outputData.data))

            this.addSuccess = true;
            this.submitted =true;
            console.log("form suucess",this.addSuccess,this.submitted)

            // -----------reset the form-------
            this.addressModel = new Address();
            this.submitted = false;   
          }
          else{ 
           
            console.log(this.outputData);
          }
            
        }) 
       
    }
   
    
  }
}