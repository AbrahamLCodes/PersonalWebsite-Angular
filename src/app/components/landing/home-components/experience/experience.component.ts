import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['../../../../app.component.css']
})
export class ExperienceComponent implements OnInit {

  public faPlayCircle = faPlayCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
