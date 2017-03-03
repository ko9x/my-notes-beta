import { Injectable } from '@angular/core';
import { Note } from '../note';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NoteService {

  notes: Note[] = []

  constructor(private http: Http) { }



  storeNote(note: Note) {
    const body = JSON.stringify(note);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://my-notes-64d6a.firebaseio.com/notes.json', body, { headers: headers });
  }

  fetchNote() {
    return this.http.get("https://my-notes-64d6a.firebaseio.com/notes.json")
      .map((response: Response) => response.json());
  }


}

