import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logoSrc = 'assets/images/cart_logo.png';
  logoAlt = 'cart_logo';

  constructor() {}

  ngOnInit(): void {}
}
