import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  id:number = 100;

  createDb() {



    const users = [
      { id: 1, user: 'oleg' },
      { id: 1, user: 'irina' }
    ];

    const sections = [
      {  id: 1, section: 'Work', user: 'irina' },
      {  id: 2, section: 'Walk', user: 'irina'  },
      {  id: 3, section: 'Home', user: 'irina'  }
    ];

    const notes = [
      { id: 11, name: 'Dr Nice', section: 'Work' },
      { id: 12, name: 'Narco', section: 'Work' },
      { id: 13, name: 'Bombasto', section: 'Work' },
      { id: 14, name: 'Celeritas', section: 'Work' },
      { id: 15, name: 'Magneta', section: 'Work' },
      { id: 16, name: 'RubberMan', section: 'Work' },
      { id: 17, name: 'Dynama', section: 'Work' },
      { id: 18, name: 'Dr IQ', section: 'Home' },
      { id: 19, name: 'Magma', section: 'Home' },
      { id: 20, name: 'Tornado', section: 'Home' },
    ];

    return {notes, sections, users};
  }

  genId(notes: Note[]): number {
    return this.id++;
  }

}

interface Note
{
id: number,
  name: string,
  section: string
}
