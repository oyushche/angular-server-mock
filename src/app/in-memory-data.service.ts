import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  id:number = 100;

  createDb() {

    const users = [
      { id: 1, name: 'Oleg' },
      { id: 2, name: 'Irina' }
    ];

    const sections = [
      {  id: 3, title: 'Work', user: 'Irina' },
      {  id: 4, title: 'Walk', user: 'Irina'  },
      {  id: 5, title: 'Home', user: 'Irina'  }
    ];

    const notes = [
      { id: 6, text: 'Dr Nice', section: 'Work' },
      { id: 7, text: 'Narco', section: 'Work' },
      { id: 8, text: 'Bombasto', section: 'Work' },
      { id: 9, text: 'Celeritas', section: 'Work' },
      { id: 10, text: 'Magneta', section: 'Work' },
      { id: 11, text: 'RubberMan', section: 'Work' },
      { id: 12, text: 'Dynama', section: 'Work' },
      { id: 13, text: 'Dr IQ', section: 'Home' },
      { id: 14, text: 'Magma', section: 'Home' },
      { id: 15, text: 'Tornado', section: 'Home' },
    ];

    return {notes, sections, users};
  }

  genId(): number {
    return this.id++;
  }
}
