import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ApiserviceService } from '../network/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  
  usersModel:User = new User();
  submitted = false;
  addSuccess = false;
  outputData:any;

  constructor(private apiServices: ApiserviceService) { }
  
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmpasswordType: string = 'password';
  confirmpasswordIcon: string = 'eye-off';

  ngOnInit() {



  }

  signUp(){
    if (this.usersModel.formGroup.valid){
      var formData= new FormData();
      formData.append('fullname',this.usersModel.fullname);
      formData.append('email',this.usersModel.email);
      formData.append('phone',this.usersModel.phone);
      formData.append('password',this.usersModel.password);
      formData.append('confirmPassword',this.usersModel.confirmPassword);
      this.apiServices.signUpUsers(formData).subscribe(
        data => {
          this.outputData = data;
          if(this.outputData.errorCode == 0){
            Swal.fire({
              icon: 'success',
              title:'Signup Successful',
              text: 'Confirmation mail has been sent to your giving email-id.Please verify it to Log-in.',
              
            })
            console.log("user", this.outputData)
            this.addSuccess = true;
            this.submitted =true;
            console.log("form suucess",this.addSuccess,this.submitted)
            // -----------reset the form-------
            this.usersModel = new User();
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
   
    // else{
    //   alert("Invalid:Please fill up the blank fields")
    // }
  
  }






  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

 hideShowConfirmPassword() {
  this.confirmpasswordType = this.confirmpasswordType === 'text' ? 'password' : 'text';
  this.confirmpasswordIcon = this.confirmpasswordIcon === 'eye-off' ? 'eye' : 'eye-off';
}


}
