import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faq } from '../interfaces/faq.interface';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private apiURL = 'http://localhost:5432/api/faq/';
  constructor(private http: HttpClient) { }

   getAll(): Observable<HttpResponse<Faq[]>>{
      return this.http.get<Faq[]>(this.apiURL, {observe: 'response'});
  } 
  
  getOne(faqId: String): Observable<HttpResponse<Faq>>{
    return this.http.get<Faq>(this.apiURL + faqId, {observe: 'response'});
  }
  deleteOne(faqId: string):Observable<HttpResponse<Faq>>{
    return this.http.delete<Faq>(this.apiURL+'delete/'+ faqId, {observe: 'response'})
  }

  addOne(faq: Faq):Observable<HttpResponse<Faq>>{
    return this.http.post<Faq>(this.apiURL+'create/', faq, {observe: 'response'})
  }
  updateFaq(faq:Faq):Observable<HttpResponse<Faq>>{
    return this.http.put<Faq>(this.apiURL+faq._id,faq,{observe:'response'})
  }
  
}
