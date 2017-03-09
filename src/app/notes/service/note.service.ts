import { Injectable } from '@angular/core';
import { Note } from '../note';
import { Http, Headers, Response } from '@angular/http';
import { AngularFire } from 'angularfire2';
import 'rxjs/Rx';

@Injectable()
export class NoteService {

  notes: Note[] = []

  constructor(private http: Http, private angularFire: AngularFire) { }

  getNotes() {
    return this.angularFire.database.list('notes');
  }

  storeNote(note: Note) {
    this.angularFire.database.list('notes').push(note)
  }

  getNote(id: string) {
    return this.angularFire.database.object('/notes/' + id)
  }

  // storeNote(note: Note) {
  //   const body = JSON.stringify(note);
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post('https://my-notes-64d6a.firebaseio.com/notes.json', body, { headers: headers });
  // }

  // fetchNote() {
  //   return this.http.get("https://my-notes-64d6a.firebaseio.com/notes.json")
  //     .map((response: Response) => response.json());
  // }




}

