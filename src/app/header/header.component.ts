import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu: any;
  selected: any;

  constructor() {
    this.menu = [
      { menuId: '#home', title: 'Home' },
      { menuId: '#about', title: 'About' },
      { menuId: '#portfolio', title: 'Portfolio' },
      { menuId: '#services', title: 'Services' },
      { menuId: '#publications', title: 'Publications' },
      { menuId: '#contact', title: 'Contact' }
    ];
  }
  select(item) {
    this.selected = item;
  }
  isActive(item) {
    return this.selected === item;
  }
}
