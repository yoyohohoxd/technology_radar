import { Component, OnInit } from '@angular/core';
import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies(): void {
    
    this.technologyService.getTechnologies()
      .subscribe(technologies => this.technologies = technologies.slice(0, 10));
  }
}