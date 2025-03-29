import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmiService {

  apiURL: string = "http://localhost:3000/api"
  
  constructor(private http : HttpClient) { }

  login(body: any){
    return this.http.post(`${this.apiURL}/login`, body)
  }
  guardarToken(token: string) {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('token', token);
    }
  }
  obtenerToken(): string | null {
    return typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;
  }
  sendMessage(body: any) {
    return this.http.post(`${this.apiURL}/saveMessage`, body)
  }
}
