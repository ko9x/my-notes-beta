import { Injectable } from '@angular/core';
import { Note } from '../note';
import { Http, Headers, Response } from '@angular/http';
import { AngularFire } from 'angularfire2';

@Injectable()
export class NoteService {

  private gitSections = ['misc', 'general', 'commit', 'log', 'diff', 'branch', 'merge', 'tag', 'stash', 'time-travel', 'remote', 'cloning'];
  private angularfireSections = ['misc', 'methods'];

  private gitHeaderTitle = 'Git/Github';
  private angularfireHeaderTitle = 'AngularFire2/Firebase';

  constructor(private http: Http, private angularFire: AngularFire) {
  }

  getNotes() {
    return this.angularFire.database.list('notes');
  }

  storeNote(note: Note) {
    this.angularFire.database.list('notes').push(note);
  }

  getNote(id: string) {
    return this.angularFire.database.object('/notes/' + id);
  }

  updateNote(note: Note, id: string) {
    this.angularFire.database.object('/notes/' + id).update(note);
  }

  removeNote(id: string) {
    this.angularFire.database.object('/notes/' + id).remove();
  }

  getSections(name: string) {
    return this[name + 'Sections'];
  }

  getHeaderTitle(name: string) {
    return this[name + 'HeaderTitle'];
  }

}

