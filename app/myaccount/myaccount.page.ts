import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../network/apiservice.service';
import { userLogin } from '../models/user-login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

 
  profileModel:Profile = new Profile();
  submitted = false;
  addSuccess = false;
  outputData:any;
  user_data:any

  constructor(private apiServices: ApiserviceService, private route:Router) { 

   // this.fId = 34;
  }
  
 

  ngOnInit() {

    this.user_data =  JSON.parse(localStorage.getItem("userData")!)
    console.log("user-login-data",this.user_data);

  }
  updateProfile(){
   
    if (this.profileModel.formGroup.valid){

      var formData= new FormData();
      formData.append('fId',this.user_data.id);
      //console.log("form_data",this.user_data.id)
      //formData.append('fId',this.profileModel.fId);
      formData.append('fullname',this.user_data.fullname);
      formData.append('email',this.user_data.email);
      formData.append('phone',this.user_data.phone);
      formData.append('gender',this.user_data.gender);
      //console.log("formData",formData)
      this.apiServices.profileUpdate(formData).subscribe(
        data => {
          this.outputData = data;
          
          if(this.outputData.errorCode == 0){
            Swal.fire({
              icon: 'success',
              title:'Profile Updated Successfully.',
               
            })

            localStorage.setItem('userData',JSON.stringify(this.user_data))

            console.log("user", this.outputData)
            this.addSuccess = true;
            this.submitted =true;
            console.log("form suucess",this.addSuccess,this.submitted)

            // -----------reset the form-------
            //this.profileModel = new Profile();


          }
          else{ 
            Swal.fire({
              icon: 'error',
              title:'Oops..!',
            
              
            })
           
          }
          console.log(this.outputData);
            
        }) 
       
    }
   
    // else{
    //   alert("Invalid:Please fill up the blank fields")
    // }
  
  }

  

}

