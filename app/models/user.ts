import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class User {

    fullname : string;
    email : string;
    phone: string;
    password:string;
    confirmPassword:string;
    formGroup: FormGroup ;
    submitted = false;


    constructor(){
      
        this.fullname = "";
        this.email = "";
        this.phone = "" ;
        this.password ="";
        this.confirmPassword = "";

        var fb = new FormBuilder();
        this.formGroup = fb.group({
            'fullnameControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
            'emailControl': ['',[Validators.required,Validators.email]],
            'phoneControl':  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            'passwordControl': ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
            'confirmPasswordControl': ['',[Validators.required]],
        },{validators: MustMatch('passwordControl','confirmPasswordControl')});

       
    }
}


// export class loginusers {
//     email:string;
//     password: string;
//     formGroup: FormGroup;
//     constructor(){
//         var fb = new FormBuilder();
//         this.formGroup = fb.group({
//             'emailControl': ['',[Validators.required,Validators.email]],
//             'passwordControl': ['',[Validators.required]],
            
//         });
//     }
// }


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