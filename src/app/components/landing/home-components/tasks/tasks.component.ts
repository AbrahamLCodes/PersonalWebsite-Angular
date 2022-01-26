import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/components/shared/services/language.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class TasksComponent implements OnInit {

  public languageEs: any;

  constructor(
    private language: LanguageService
  ) {
    this.languageEs = language.es;
  }

  ngOnInit(): void {
  }

  public iconURL(): string {
    return "https://cdn.lordicon.com/jqeuwnmb.json"
  }

}
