import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AboutComponent } from '../../landing/home-components/about/about.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../../app.component.css']
})
export class NavbarComponent implements OnInit {

  public faBars = faBars;
  public isCollapsed: boolean = true;
  public scrollTimeout: any;

  @ViewChild("ABOUT") aboutSection: ElementRef
  @ViewChild(AboutComponent, { read: ElementRef }) private footerElementRef: ElementRef;

  constructor(
    private renderer: Renderer2
  ) { }

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