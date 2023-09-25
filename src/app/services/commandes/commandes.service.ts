import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
 
  private apiUrl = 'http://localhost:8081/SpringMVC/servlet';

  constructor(private http : HttpClient) { }

  getCommandes(){
   return this.http.get(`${this.apiUrl}/Orders`)
  }

}
