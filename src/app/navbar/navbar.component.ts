import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NoteService } from '../notes/service/note.service';
import { Note } from '../notes/note';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private notes: FirebaseListObservable<Note[]>;
  private pageNotesArray = [];
  private pageNamesArray = [];

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
    this.notes.forEach(element => {
      element.forEach(note => {
        if (this.pageNamesArray.indexOf(note.page) == -1) {
          this.pageNamesArray.push(note.page)
        }
      });
      for (let i = 0; i < this.pageNamesArray.length; i++) {
        this.pageNotesArray.push(element.filter(item => {
          return item.page === this.pageNamesArray[i]
        }));
      }
    });
  }

}
