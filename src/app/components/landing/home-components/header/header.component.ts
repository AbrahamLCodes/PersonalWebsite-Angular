import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class HeaderComponent implements OnInit {

  public list: string[] = ["Apps iOS, Android y PWA", "Sistemas Web, Windos, MacOS y GNU" ,"Sistemas distribuidos en la nube y/o locales"];

  constructor() { }

  public ngOnInit(): void {
  }

}
