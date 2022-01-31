import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Updateaddress } from '../models/update-address';
import { ApiserviceService } from '../network/apiservice.service';
import { ToastService } from '../network/toast.service';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-address-update',
  templateUrl: './address-update.page.html',
  styleUrls: ['./address-update.page.scss'],
})
export class AddressUpdatePage implements OnInit {


  updateaddressModel:Updateaddress = new Updateaddress();
  submitted = false;
  addSuccess = false;
  outputData:any;
  updateAddressdata:any
  addressList:any;
  outputAddressList:any
  add_id:number;
  f_id:number;
  setAddress:any
  addressDetails:any


  constructor( private apiService:ApiserviceService,private route : ActivatedRoute,public utilService:UtilService,private ionicToastService:ToastService) {
    this.setAddress = {};
   }

  ngOnInit() {

    this.f_id = this.route.snapshot.params['fId'];
    this.add_id = this.route.snapshot.params['id']

    this.utilService.loaderPromise( "Plesae wait...")

    if(!this.apiService){
      this.utilService.loaderPromise( "Plesae wait...")
    }
    else if(this.apiService){
      this.apiService.addressDetails(this.f_id,this.add_id).subscribe(
        res => {
          this.addressDetails = res;
          this.setAddress = this.addressDetails.data
          console.log("addressdetails",this.setAddress)
        }
      )
    }
   

    this.updateAddressdata =  JSON.parse(localStorage.getItem("addressdata")!)
    console.log("updateaddressdata",this.updateAddressdata);

  }

    addressUpdate(){

    this.utilService.loaderPromise( "Plesae wait...")

    if (this.updateaddressModel.formGroup.valid){
      var formData= new FormData();

      formData.append('fId',this.setAddress.memberId);
      //console.log('id',this.updateAddressdata.id)

      formData.append('id',this.setAddress.id);
      formData.append('fullname',this.setAddress.fullname);
      formData.append('phone',this.setAddress.phone);
      formData.append('address',this.setAddress.address);
      formData.append('country',this.setAddress.country);
      formData.append('state',this.setAddress.state);
      formData.append('zip',this.setAddress.zip);
      
      this.apiService.add_editAddress(formData).subscribe(
        data => {
          this.outputData = data;
          if(this.outputData.errorCode == 0){
            
            console.log("user", this.outputData)

            this.utilService.presentToast(
              'Address Updated Successfully'
            )

             // --------storing data in local storage----
            localStorage.setItem('addressdata',JSON.stringify(this.outputData.data))

            this.addSuccess = true;
            this.submitted =true;
            console.log("form suucess",this.addSuccess,this.submitted)
            // -----------reset the form-------
            //this.addressModel = new AddressList();
          // this.submitted = false;   
          }
          else{ 
           
            console.log(this.outputData);
          }
            
        }) 
       
    }
   
  }
}
