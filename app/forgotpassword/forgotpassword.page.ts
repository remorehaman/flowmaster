import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiserviceService } from '../network/apiservice.service';
import Swal from 'sweetalert2';
import { Forgotpassword } from '../models/forgot-password';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  forgotpassModel:Forgotpassword = new Forgotpassword()
  submitted = false;
  addSuccess = false;
  outputData:any;

  constructor(private apiServices: ApiserviceService) { }

  ngOnInit() {
  }


  resetPassword(){

    if (this.forgotpassModel.formGroup.valid){
      var formData= new FormData();
      formData.append('oldPassword',this.forgotpassModel.oldPassword);
      formData.append('password',this.forgotpassModel.newPassword);
      formData.append('confirmPassword',this.forgotpassModel.confirmPassword);
      this.apiServices.signUpUsers(formData).subscribe(
        data => {
          this.outputData = data;
          if(this.outputData.errorCode == 0){
            Swal.fire({
              icon: 'success',
              title:'Password Reset Successful',
              text: 'Confirmation mail has been sent to your giving email-id.Please verify it to Log-in.',
              
            })
            console.log("user", this.outputData)
            this.addSuccess = true;
            this.submitted =true;
            console.log("form suucess",this.addSuccess,this.submitted)
            // -----------reset the form-------
            this.forgotpassModel = new Forgotpassword();
          // this.submitted = false;   
          }
          else{ 
            Swal.fire({
              icon: 'error',
              title:'Oops..!',
              text: 'Email alreay exists.Plaese verify the conformatiom mail sent to your email-id to Log in.',
              
            })
            console.log(this.outputData);
          }
            
        }) 
       
    }
   

  }
}
