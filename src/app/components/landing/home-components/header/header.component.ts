import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class HeaderComponent implements OnInit {

  public lang: any;

  constructor(
    private language: LanguageService
  ) { 
    this.lang = language.languageSelected;
     language.lang.subscribe(value => {
       this.lang = value;
     })
  }

  public ngOnInit(): void {
  }

}
