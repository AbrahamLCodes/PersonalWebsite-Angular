import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class AboutComponent implements OnInit {

  public languageEs: any;
  
  constructor(
    private language: LanguageService
  ) {
    this.languageEs = language.es;
  }

  ngOnInit(): void {
  }

}
