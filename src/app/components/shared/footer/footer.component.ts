import { Component, OnInit } from '@angular/core';
import { faGooglePlay, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../../app.component.css']
})
export class FooterComponent implements OnInit {

  public faGooglePlay = faGooglePlay;
  public faGithub = faGithub;
  public faInstagram = faInstagram;

  public languageEs: any;

  constructor(
    public language: LanguageService
  ) {
    this.languageEs = language.es;
  }

  ngOnInit(): void {
  }

}
