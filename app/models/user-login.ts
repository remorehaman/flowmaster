import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class userLogin  {

    username : string;
    password:string;
    confirmpassword:string;
    formGroup: FormGroup ;
    status:string;
    submitted = false;


    constructor(){
      
        this.username = "";
        this.password ="";
        this.confirmpassword = "";
        this.status = "";


        var fb = new FormBuilder();
        this.formGroup = fb.group({
            'usernameControl': ['',[Validators.required,Validators.email]],
            'passwordControl': ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
            'confirmpasswordControl': ['',[Validators.required]],
        },{validators: MustMatch('passwordControl','confirmpasswordControl')});

       
    }
}


export function MustMatch(controlName: string, matchingControlName: string){
    return (formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    
    }
}
