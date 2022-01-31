import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BaseResponse } from '../models/base-response';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  API_BASE_URL = environment.API_BASE_URL
 
  constructor(private httpClient:HttpClient) {}
  
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `API returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

 

  getContentBySlug(permalink: string): Observable<BaseResponse> {
    return this.httpClient.get<BaseResponse>(this.API_BASE_URL+  `/${permalink}/`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getContentofContact():Observable<BaseResponse>{
    return this.httpClient.get<BaseResponse>(this.API_BASE_URL + "/contact-us/").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  signUpUsers(is_users:any):Observable<BaseResponse>{
    return this.httpClient.post<BaseResponse>(this.API_BASE_URL+'/signup/',is_users).pipe(
      retry(1),
      catchError(this.handleError)
    )
    
  }
  loggedInUser(login_users:any):Observable<BaseResponse>{
    return this.httpClient.post<BaseResponse>(this.API_BASE_URL+'/login/',login_users).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  
  profileUpdate(userData:any):Observable<BaseResponse>{
    return this.httpClient.post<BaseResponse>(this.API_BASE_URL+'/profile-update/',userData).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  add_editAddress(userAddress:any):Observable<BaseResponse>{
    return this.httpClient.post<BaseResponse>( this.API_BASE_URL + '/add-edit-address/',userAddress)
  }

  addressList(id:any){
    return this.httpClient.post(this.API_BASE_URL + "/list-of-address/", id)
  }

  deleteAddress(memberid:number,id:number):Observable<BaseResponse>{
   
    const formdata = new FormData();
    formdata.append('fId',memberid.toString());
    formdata.append('addressId',id.toString());
    return this.httpClient.post<BaseResponse>(this.API_BASE_URL + '/delete-address/',formdata)
  }


  addressDetails(fid:any,addressId:any):Observable<BaseResponse>{
    const formdata = new FormData()
    formdata.append('fId',fid)
    formdata.append('id',addressId)
    return this.httpClient.post<BaseResponse>(this.API_BASE_URL + '/address-details/',formdata)
  }

  bannerSlider():Observable<BaseResponse>{
    return this.httpClient.get<BaseResponse>(this.API_BASE_URL + "/homeBanner/").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  productList(page:number):Observable<BaseResponse>{
    return this.httpClient.get<BaseResponse>(this.API_BASE_URL + '/productList/' + '?page=' + page ).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getProductDetails(permalink:string):Observable<BaseResponse>{
    return this.httpClient.get<BaseResponse>(this.API_BASE_URL + '/productDetails/' + '?permalink=' + `${permalink}`)
  }

  getFAQList():Observable<BaseResponse>{
    return this.httpClient.get<BaseResponse>(this.API_BASE_URL + "/faq/").pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

}

