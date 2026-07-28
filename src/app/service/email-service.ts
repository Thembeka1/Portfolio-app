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

  private apiUrl = 'https://portfolio-backend-production-764a.up.railway.app/api/email/send';

  sendEmail(request: EmailRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}