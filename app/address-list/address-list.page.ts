import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ApiserviceService } from '../network/apiservice.service';
import { UtilService } from '../util/util.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {

  addressList:any;
  outputAddressList:any
  newoutputAddressList:any


  constructor(private apiService:ApiserviceService, public loadingCtrl: LoadingController,public utilService:UtilService) { }

   ngOnInit() {

    
    this.addressList = JSON.parse(localStorage.getItem('userData')!)
    console.log("list",this.addressList)

    // const loading = await this.loadingCtrl.create(
    //   {
    //     message:"Plesae wait...",
    //     spinner:'bubbles'
    //   });
    //   await loading.present()

    this.utilService.loaderPromise(
      "Plesae wait..."
      )
     
        let formData = new FormData()
    // -------------this fid is in database and id get the respone in console--------
      if(!formData){
        this.utilService.loaderPromise(
          "Plesae wait..."
          )
      }else{
        formData.append('fId',this.addressList.id)
        this.apiService.addressList(formData).subscribe(
        data =>{
          this.outputAddressList = data;
          console.log("aaddressList",this.outputAddressList.data)
          
        })
        //  this.utilService.dismiss()
      }

      
      
     
    
   
    

  }

  delete(memberid:number,id:number,myIndex){

    console.log("mem",id,memberid)
  
    this.apiService.deleteAddress(memberid,id).subscribe(
      data =>{
        this.newoutputAddressList = data;

        this.outputAddressList.data.splice(myIndex, 1);

        console.log("aaddressList",this.outputAddressList.data)
      
        console.log("new-address-list",this.newoutputAddressList)
      }
    )

  }
}
