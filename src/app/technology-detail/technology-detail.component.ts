import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrls: ['./technology-detail.component.css']
})
export class TechnologyDetailComponent implements OnInit {
  @Input() technology?: Technology;

  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private location: Location
  ) {}

  getTechnology(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.technologyService.getTechnology(id)
      .subscribe(technology => this.technology = technology);
  }
  
  goBack(): void {
    this.location.back();
  }
  
  ngOnInit(): void {
    this.getTechnology();
  }
  
  save(): void {
    if (this.technology) {
      this.technologyService.updateTechnology(this.technology)
        .subscribe(() => this.goBack());
    }
  }

}