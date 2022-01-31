import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Profile {

    //fId:any
    fullname : string;
    email : string;
    phone: string;
    // address:string;
    // city:string;
    gender:string;
    formGroup: FormGroup ;
    submitted = false;


    constructor(){
        
        //this.fId = 34 ;
            this.fullname = "";
            this.email = "";
            this.phone = "" ;
            // this.address = "";
            // this.city="";
            this.gender="";
            var fb = new FormBuilder();
            this.formGroup = fb.group({
                'fullnameControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
                'emailControl': ['',[Validators.required,Validators.email]],
                'phoneControl':  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
                // 'addressControl': ['',[Validators.required]],
                // 'cityControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
                'genderControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
                
            },);

       
    }
}





