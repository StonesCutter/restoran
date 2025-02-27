import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class TestimonialService {
  private apiUrl = 'http://18.194.21.216/api/reviews'; 

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}



