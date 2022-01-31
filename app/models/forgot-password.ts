import { FormBuilder, FormGroup, Validators } from "@angular/forms";


export class Forgotpassword{

    oldPassword:string;
    newPassword:string;
    confirmPassword:string
    formGroup: FormGroup;

    constructor(){


        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";

        var fb = new FormBuilder();
        this.formGroup = fb.group({
            'oldPasswordControl': [Validators.required],
            'newPasswordControl': ['',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
            'confirmPasswordControl': ['',[Validators.required]],
        },{validators: MustMatch('newPasswordControl','confirmPasswordControl')});

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