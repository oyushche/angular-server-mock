import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  users:User[] = [];
  sections:Section[] = [];
  notes:Note[] = [];

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

    this.refreshData();

  }

  refreshData()
  {
      this.http.get<User[]>("api/users").subscribe(users => this.users = users);
      this.http.get<Section[]>("api/sections").subscribe(sections => this.sections = sections);
      this.http.get<Note[]>("api/notes").subscribe(notes => this.notes = notes);

      // Notes with section filter
      this.http.get<Note[]>("api/notes", { params: new HttpParams().set('section', 'Work') })
        .subscribe(notes => console.dir(notes));
  }

  addUser()
  {
    this.http.post("/api/users", { name: "new user " + (this.users.length + 1) })
      .subscribe(() => this.refreshData());

  }

  addSection()
  {
    this.http.post("/api/sections",
      { title: "new section " + (this.sections.length + 1),
              user: "Oleg"
      })
      .subscribe(() => this.refreshData());

  }

  addNote()
  {
    this.http.post("/api/notes",
      { text: "new note " + (this.notes.length + 1),
        section: "Home"
      })
      .subscribe(() => this.refreshData());

  }

  updateNote()
  {
    this.http.put("/api/notes", { id: 6, text: "new note " + Math.random() })
      .subscribe(() => this.refreshData());

  }

  deleteNote(id: number)
  {
    this.http.delete("/api/notes/" + id)
      .subscribe(() => this.refreshData());
  }



}

export interface User
{
  id: number,
  name: string
}

export interface Section
{
  id: number,
  title: string,
  user: string
}

export interface Note
{
  id: number,
  text: string,
  section: string
}
