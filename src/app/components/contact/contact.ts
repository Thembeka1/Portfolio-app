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


    this.showSuccess = false;

    this.showError = false;


    this.isSending = true;



    this.emailService.sendEmail(this.emailData)
      .subscribe({

        next: (response) => {


          console.log(response);


          this.showSuccess = true;

          this.showError = false;

          this.isSending = false;


          console.log("SHOW SUCCESS:", this.showSuccess);



          // Clear form

          this.emailData = {

            name: '',

            email: '',

            subject: '',

            message: ''

          };



          // Hide success popup after 3 seconds

          setTimeout(() => {

            this.showSuccess = false;

          }, 3000);


        },



        error: (error) => {


          console.error(error);


          this.showError = true;

          this.showSuccess = false;

          this.isSending = false;



          setTimeout(() => {

            this.showError = false;

          }, 3000);


        }


      });


  }


}