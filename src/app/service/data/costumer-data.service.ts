import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumerDataService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customers`);
  }

  getCustomer(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customers/` + id);
  }

  createCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/customers`, customerData);
  }

  editCustomer(customerData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/customers/` + customerData.id , customerData);
  }

  deleteCustomer(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/customers/` + id);
  }

}
