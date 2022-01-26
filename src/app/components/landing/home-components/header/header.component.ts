import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class HeaderComponent implements OnInit {

  public list: string[] = [
    "Apps iOS, Android y PWA", 
    "Páginas y Sistemas Web",
    "Bases de datos y servidores"
  ];

  constructor() { }

  public ngOnInit(): void {
  }

}
