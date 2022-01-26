import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';

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

  public languageEs: any;

  constructor(
    private language: LanguageService
  ) { 
    this.languageEs = language.es;  
  }

  public ngOnInit(): void {
  }

}
