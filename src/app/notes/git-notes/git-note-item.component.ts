import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-git-note-item',
  templateUrl: './git-note-item.component.html',
  styleUrls: ['./git-note-item.component.css']
})
export class GitNoteItemComponent implements OnInit {

  @Input() note: Note
  @Input() noteId: number

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    console.log(this.note.isEditable)
  }

  onCanEdit(note: Note) {
    console.log(note)
    this.note.isEditable = this.note.isEditable;
    console.log(note)
  }

  

}
