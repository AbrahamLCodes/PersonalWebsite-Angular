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
  public lang: any;

  constructor(
    private language: LanguageService
  ) {
    this.lang = this.language.languageSelected;
    this.language.lang.subscribe(value => {
      this.lang = value;
    })
  }

  ngOnInit(): void {
  }

  public selectEs(): void {
    this.language.selectEs();
  }

  public selectEn(): void {
    this.language.selectEn();
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