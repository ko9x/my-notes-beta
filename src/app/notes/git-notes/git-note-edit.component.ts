import { Component, OnInit } from '@angular/core';

import { NoteService } from '../service/note.service';
@Component({
  selector: 'app-git-note-edit',
  templateUrl: './git-note-edit.component.html',
  styleUrls: ['./git-note-edit.component.css']
})
export class GitNoteEditComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

}
