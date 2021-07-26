import { Component, OnInit } from '@angular/core';

import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})

export class TechnologiesComponent implements OnInit {
  technologies: Technology[] = [];

  aNumber = 1;

  constructor(private technologyService: TechnologyService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
    .subscribe(technologies => this.technologies = technologies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.technologyService.addTechnology({ name } as Technology)
      .subscribe(technology => {
        this.technologies.push(technology);
      });
  }

  delete(technology: Technology): void {
    this.technologies = this.technologies.filter(h => h !== technology);
    this.technologyService.deleteTechnology(technology.id).subscribe();
  }
}
