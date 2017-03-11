import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { NoteService } from './service/note.service';
import { Note } from './note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesComponent implements OnInit {

  notes: FirebaseListObservable<Note[]>
  sectionArray = [];
  gitPageArray = []
  filteredNames = [];

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.getNotes()
    console.log(this.sectionArray)
  }

  getNotes() {
    let array1 = []
    let array2 = []
    this.notes = this.noteService.getNotes()
    this.notes.forEach(element => {
      array1.push(element)
      array1.forEach(note => {
        note.forEach(item => {
          if (this.sectionArray.indexOf(item.section) == -1) {
            this.sectionArray.push(item.section);
          }
          this.sectionArray.slice((this.sectionArray.length - 1), (this.sectionArray.length))
        });
      });
    });
  }

  toAdd(sectionName) {
    this.router.navigate(['notes/git-notes/new/' + sectionName])
  }

  onCanEdit(note: Note) {
    note.isEditable = !note.isEditable;
  }

}
