import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  hero: Hero = {
    id: 1,
    name: 'Mads-Emil Kjeldsen Hansen'
  };

  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
