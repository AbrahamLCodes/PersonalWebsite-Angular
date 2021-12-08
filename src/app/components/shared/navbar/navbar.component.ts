import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../app.component.css']
})
export class NavbarComponent implements OnInit {

  public faBars = faBars;
  public isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
