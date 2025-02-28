import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',  // This is the tag that will be used in HTML
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Generate an array with numbers from 1 to 25 for the trackers
  trackers = Array.from({ length: 25 }, (_, i) => i + 1);
}
