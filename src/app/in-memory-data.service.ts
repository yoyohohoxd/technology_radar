import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Technology } from './technology';
import { MessageService } from './message.service';
import { TechnologyDetailComponent } from './technology-detail/technology-detail.component';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const technologies = [
      { id: 1, name: 'Artificial Intelligence', description: 'This is AI' },
      { id: 2, name: 'Machine Learning', description: 'This is AI' },
      { id: 3, name: 'Edge Computing', description: 'This is AI' },
      { id: 4, name: 'Quantum Computing', description: 'This is AI' },
      { id: 5, name: 'Virtual Reality', description: 'This is AI' },
      { id: 6, name: 'Augmented Reality', description: 'This is AI' },
      { id: 7, name: 'Blockchain', description: 'This is AI' },
      { id: 8, name: 'Internet of Things', description: 'This is AI' },
      { id: 9, name: '5G', description: 'This is AI' },
      { id: 10, name: 'Cyber Security' }
    ];
    return {technologies};
  }

  // Overrides the genId method to ensure that a technology always has an id.
  // If the technologies array is empty,
  // the method below returns the initial number (11).
  // if the technologies array is not empty, the method below returns the highest
  // technology id + 1.
  genId(technologies: Technology[]): number {
    return technologies.length > 0 ? Math.max(...technologies.map(technology => technology.id)) + 1 : 11;
  }

}

/*

Artificial Intelligence (AI) and Machine Learning
Robotic Process Automation (RPA)
Edge Computing
Quantum Computing
Virtual Reality and Augmented Reality
Blockchain
Internet of Things (IoT)
5G
Cyber Security

*/