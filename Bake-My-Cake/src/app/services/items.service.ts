import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITEMS } from '../models/itemsModel';
import { CUSTOMERS } from '../models/customerDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { 
  
  }
_Url:string="http://localhost:3000/FoodItems";
customer_Url="http://localhost:3001/Customer-Details"
  getItems():Observable<ITEMS[]>
  {
       return this.http.get<ITEMS[]>(this._Url);
  }

  getItemsWithId(id?:any):Observable<ITEMS>
  {   let parsedId=parseInt(id);
    
       return this.http.get<ITEMS>(`${this._Url}/${parsedId}`);
  }


  getCustomerDetails():Observable<CUSTOMERS[]>
  {
    return this.http.get<CUSTOMERS[]>(this.customer_Url);
  }


  saveCustomer(customerData:CUSTOMERS):Observable<CUSTOMERS[]>
  {
return this.http.post<CUSTOMERS[]>(this.customer_Url,customerData);
  }

}
