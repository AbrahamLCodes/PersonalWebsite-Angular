import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../app.component.css']
})
export class NavbarComponent implements OnInit {

  public faBars = faBars;
  public isCollapsed: boolean = true;
  public languageEs: any;
  public languageEn: any

  constructor(
    private language: LanguageService
  ) {
    this.languageEs = language.es;
  }

  ngOnInit(): void {
  }

  public scrollTo(id: string): void {
    const el = document.getElementById(id);
    const bodyRect = document.body.getBoundingClientRect()
    const elementRect = el!.getBoundingClientRect();
    const offset = elementRect.top - bodyRect.top - 200;
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }
}