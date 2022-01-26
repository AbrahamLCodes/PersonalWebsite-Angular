import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class StacksComponent implements OnInit {

  public lang: any;

  constructor(
    private language: LanguageService
  ) {
    this.lang = language.es;
    language.lang.subscribe(value => {
      this.lang = value;
    })
  }

  ngOnInit(): void {
  }

}
