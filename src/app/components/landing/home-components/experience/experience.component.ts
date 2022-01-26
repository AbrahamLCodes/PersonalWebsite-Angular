import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { LanguageService } from 'src/app/components/shared/services/language.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class ExperienceComponent implements OnInit {

  public faPlayCircle = faPlayCircle;
  public languageEs: any;

  constructor(
    private language: LanguageService
  ) { 
    this.languageEs = language.es;
  }

  ngOnInit(): void {
  }

}
