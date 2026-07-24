import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  darkMode = false;


  toggleTheme(){

    this.darkMode = !this.darkMode;

    document.body.classList.toggle(
      'dark-theme',
      this.darkMode
    );

    console.log("Dark mode:", this.darkMode);
    console.log(document.body.className);

  }

}