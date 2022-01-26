import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class AboutComponent implements OnInit {

  public lang: any;
  
  constructor(
    private language: LanguageService
  ) {
    this.lang = language.es;
    this.language.lang.subscribe(value => {
      this.lang = value;
    })
  }

  ngOnInit(): void {
  }

}
