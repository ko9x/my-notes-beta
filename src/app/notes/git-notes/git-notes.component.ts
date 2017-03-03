import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NoteService } from '../service/note.service';
import { Note } from '../note';
@Component({
  selector: 'app-git-notes',
  templateUrl: './git-notes.component.html',
  styleUrls: ['./git-notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GitNotesComponent implements OnInit {

  notes: Note[] = []

  constructor(private noteService: NoteService) { }

  ngOnInit() {
   this.getNotes()
  }



  getNotes() {
    this.noteService.fetchNote()
      .subscribe(
        data => {
          const myArray = []
          for (let key in data) {
            myArray.push(data[key])
          }
          this.notes = myArray;
        }
      )
  }



}
