import { Component } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';

import { Footer } from './components/footer/footer';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   NavbarComponent,
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Education,
   ContactComponent,
   Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}