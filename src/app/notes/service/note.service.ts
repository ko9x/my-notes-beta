import { Injectable } from '@angular/core';
import { Note } from '../note';
import { Http, Headers } from '@angular/http';

@Injectable()
export class NoteService {

  notes: Note[] = []

  constructor(private http: Http) { }



storeNote(note: Note) {
    const body = JSON.stringify(note);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://my-notes-64d6a.firebaseio.com/notes.json', body, {headers: headers});
  }

}

