import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/email/send';

  sendEmail(request: EmailRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}