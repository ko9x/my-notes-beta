import { Injectable } from '@angular/core';
import { Note } from '../note';
import { Http, Headers, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class NoteService {

  private notes: FirebaseListObservable<Note[]>;
  private currentPageNotes = [];
  private sectionArray = [];
  private currentPageSections = [];

  constructor(private http: Http, private angularFire: AngularFire) {
  }

  startNotes() {
    this.notes = this.angularFire.database.list('notes')
  }

  getNotes() {
    return this.angularFire.database.list('notes');
  }

  getCurrentPageSections() {
    return this.currentPageSections;
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

  getSections() {
    return this.sectionArray;
  }

  createArrays(page) {
    let array1 = [];
    this.currentPageNotes = []
    this.currentPageSections = []
    this.notes.forEach(element => {
      array1.push(element);
      array1.forEach(note => {
        note.forEach(item => {
          if (item.page === page) {
            this.currentPageNotes.push(item)
            if (this.sectionArray.indexOf(item.section) == -1) {
              this.sectionArray.push(item.section);
            }
            this.sectionArray.slice((this.sectionArray.length - 1), (this.sectionArray.length));
          }
        });
      });
    });
    setTimeout(() => {
      for (let i = 0; i < this.sectionArray.length; i++) {
        this.currentPageSections.push(this.currentPageNotes.filter(item => {
          return item.section === this.sectionArray[i]
        }));
      }
    }, 3200);
  }

}

