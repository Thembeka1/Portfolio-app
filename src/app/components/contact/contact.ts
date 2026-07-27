import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../service/email-service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {


  constructor(private emailService: EmailService) {}


  emailData = {

    name: '',

    email: '',

    subject: '',

    message: ''

  };


  isSending = false;

  showSuccess = false;

  showError = false;

  sendEmail() {

    this.isSending = true;
    this.showSuccess = false;
    this.showError = false;
  
    this.emailService.sendEmail(this.emailData).subscribe({
  
      next: (response) => {
  
        console.log("Success", response);
  
        this.isSending = false;
        this.showSuccess = true;
  
        this.emailData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
  
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
  
      },
  
      error: (error) => {
  
        console.log(error);
  
        this.isSending = false;
        this.showError = true;
  
        setTimeout(() => {
          this.showError = false;
        }, 5000);
  
      }
  
    });
  
  }
  
  }
