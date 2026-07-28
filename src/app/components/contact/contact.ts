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

    console.log("Button clicked!");

    this.isSending = true;
    this.showSuccess = false;
    this.showError = false;


    console.log("Sending data:", this.emailData);


    this.emailService.sendEmail(this.emailData)
      .subscribe({

        next: (response) => {

          console.log("SUCCESS:", response);


          // Stop loading button
          this.isSending = false;


          // Show success message
          this.showSuccess = true;


          // Clear form
          this.emailData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };


          
          setTimeout(() => {

            this.showSuccess = false;
            this.isSending = false;
          
          }, 3000);
       

        },


        error: (error) => {

          console.log("ERROR:", error);


    
          this.showError = true;


          setTimeout(() => {

            this.showSuccess = false;
            this.isSending = false;
          
          }, 3000);

        },


        complete: () => {

          console.log("Email request completed");

          this.isSending = false;

        }

      });

  }

}