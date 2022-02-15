import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    let matches = [
      { id: 1, teamOne: 'Es Metlaoui', teamTwo: 'Stade Gabesien', scoreOne: 3, scoreTwo: 0 },
      { id: 2, teamOne: 'As Marsa', teamTwo: 'Olympique de Beja', scoreOne: 2, scoreTwo: 1 },
      { id: 3, teamOne: 'Css Sfaxien', teamTwo: 'Etoile du Sahel', scoreOne: 3, scoreTwo: 3 },
      { id: 4, teamOne: 'Kawefel Gafsa', teamTwo: 'Olympique el Kef', scoreOne: 1, scoreTwo: 1 }
    ];

    let players = [
      { id: 1, name: 'Dybala', age: 27, team: 'Juventus', post: 'Attaquant', numero: 10 },
      { id: 2, name: 'Messi', age: 33, team: 'Fc Barcelona', post: 'Attaquant', numero: 10 },
      { id: 3, name: 'Rashford', age: 21, team: 'Man United', post: 'Attaquant', numero: 9 },
      { id: 4, name: 'Muller', age: 32, team: 'Bayern Munich', post: 'Attaquant', numero: 15 }
    ];

    return { matches, players };

  }
}
