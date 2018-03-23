import { Component, HostListener, ElementRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('movePanel', [
      transition('void => *', [
        style({ transform: 'translateY(-100)' }),
        animate(1.2)
      ])
    ])
  ]
})
export class AboutComponent {
  state = 'inactive';

  showPanel() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }
}
