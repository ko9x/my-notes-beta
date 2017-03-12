import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { NoteService } from '../../service/note.service';
import { Note } from '../../note';

@Component({
  selector: 'app-angular-fire-notes-list',
  templateUrl: './angular-fire-notes-list.component.html',
  styleUrls: ['./angular-fire-notes-list.component.css']
})
export class AngularFireNotesListComponent implements OnInit {

  notes: FirebaseListObservable<Note[]>
  
  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
    this.getNotes()
  }

  getNotes() {
    this.notes = this.noteService.getNotes()
  }

  toAdd(sectionName) {
    this.router.navigate(['notes/angular-fire-notes/angular-fire/new/' + sectionName])
  }

  onCanEdit(note: Note) {
    note.isEditable = !note.isEditable;
  }

}
