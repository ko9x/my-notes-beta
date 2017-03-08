import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note';

@Component({
  selector: 'app-git-note-item',
  templateUrl: './git-note-item.component.html',
  styleUrls: ['./git-note-item.component.css']
})
export class GitNoteItemComponent implements OnInit {

  @Input() note: Note
  @Input() noteId: number

  constructor() { }

  ngOnInit() {
  }

}
