import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-technology-search',
  templateUrl: './technology-search.component.html',
  styleUrls: [ './technology-search.component.scss' ]
})
export class TechnologySearchComponent implements OnInit {
  technologies$!: Observable<Technology[]>;
  private searchTerms = new Subject<string>();

  constructor(private technologyService: TechnologyService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.technologies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.technologyService.searchTechnologies(term)),
    );
  }
}