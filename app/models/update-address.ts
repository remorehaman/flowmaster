import { FormBuilder, FormGroup, Validators } from "@angular/forms";
export class Updateaddress{

    fullname : string;
    phone: string;
    // email : string;
    address:string;
    country:string;
    state:string
    // city:string;
    zip:string;
    // landmark:string
    formGroup: FormGroup ;
    submitted = false;

    constructor(){

        this.fullname = "";
        this.phone = "" ;
        // this.email = "";
        this.address = "";
        this.country = ""
        this.state = "";
        // this.city="";
        this.zip = "";
        // this.landmark = "";

        var fb = new FormBuilder();
        this.formGroup = fb.group({
            'fullnameControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
            // 'emailControl': ['',[Validators.required,Validators.email]],
            'phoneControl':  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            'addressControl': ['',[Validators.required]],
            'countryControl': ['',[Validators.required]],
            'stateControl': ['',[Validators.required]],
            // 'cityControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
            'zipControl': ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9 ]*$')]],
            // 'landmarkControl': ['',[Validators.required]],
            
        },);
    }
}