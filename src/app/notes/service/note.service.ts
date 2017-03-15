import { Injectable } from '@angular/core';
import { Note } from '../note';
import { Http, Headers, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class NoteService {

  private notes: FirebaseListObservable<Note>[];

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

  // createArrays() {
  //   let array1 = [];
  //   this.notes = this.noteService.getNotes();
  //   this.notes.forEach(element => {
  //     array1.push(element);
  //     array1.forEach(note => {
  //       note.forEach(item => {
  //         if (item.page === this.notePage) {
  //           this.currentPageNotes.push(item)

  //           if (this.sectionArray.indexOf(item.section) == -1) {
  //             this.sectionArray.push(item.section);
  //           }
  //           this.sectionArray.slice((this.sectionArray.length - 1), (this.sectionArray.length));
  //         }
  //       });
  //     });
  //   });
  //   setTimeout(() => {
  //     for (let i = 0; i < this.sectionArray.length; i++) {
  //       this.currentPageSections.push(this.currentPageNotes.filter(item => {
  //         return item.section === this.sectionArray[i]
  //       }));
  //     }
  //   }, 800);
  // }

}

