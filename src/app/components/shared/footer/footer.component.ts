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

  public lang: any;

  constructor(
    public language: LanguageService
  ) {
    this.lang = language.es;
    language.lang.subscribe(value => {
      this.lang = value;
    })
  }

  ngOnInit(): void {
  }

}
