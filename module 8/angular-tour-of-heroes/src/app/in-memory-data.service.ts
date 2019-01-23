import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Superman' },
      { id: 12, name: 'Batman' },
      { id: 13, name: 'wonderwomen' },
      { id: 14, name: 'Flash' },
      { id: 15, name: 'Martian-manhunter' },
      { id: 16, name: 'Cyborg' },
      { id: 17, name: 'Aquaman' },
      { id: 18, name: 'Dr.strange' },
      { id: 19, name: 'Thor' },
      { id: 20, name: 'Red Tornado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}