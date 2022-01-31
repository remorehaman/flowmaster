import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../network/apiservice.service';
import { userLogin } from '../models/user-login';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  userLoginModel: userLogin = new userLogin()
  submitted = false;
  addSuccess = false;
  outputData:any;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmpasswordType: string = 'password';
  confirmpasswordIcon: string = 'eye-off';

  constructor(private apiServices: ApiserviceService, private route:Router) { }

  ngOnInit() {
  }

  loginUser(){
    var formData= new FormData();
    formData.append('username',this.userLoginModel.username);
    formData.append('password',this.userLoginModel.password);
    this.apiServices.loggedInUser(formData).subscribe(
      data => {
        this.outputData = data;
        if(this.outputData.errorCode == 0){
            console.log("user-data",this.outputData);

          // --------storing data in local storage----
           localStorage.setItem('userData',JSON.stringify(this.outputData.data))

            let timerInterval        
            Swal.fire({
              icon: 'success',
              text: 'Login successful. Please wait...',
              timer: 2000,
              didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                 Swal.getTimerLeft()
                }, 100)
              },
              willClose: () => {
                clearInterval(timerInterval)
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
              }
            })
            this.route.navigate(['/'])
            console.log("Login Successful");
            // this.router.navigate(['/'])
        }
        else{

          Swal.fire({
            icon: 'error',
            title:'Login Failed..!',
            text: 'Invalid username or Password...!',
          })
          console.log(this.outputData);

          //alert("Unsuccessful login");
          //this.router.navigate(['/'])
        }
       
      })
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
