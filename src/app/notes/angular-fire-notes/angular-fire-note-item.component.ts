import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../note';
import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-angular-fire-note-item',
  templateUrl: './angular-fire-note-item.component.html',
  styleUrls: ['./angular-fire-note-item.component.css']
})
export class AngularFireNoteItemComponent {

  @Input() note: Note
  @Input() noteId: number

  constructor(private noteService: NoteService, private router: Router) { }

  onEdit(id: string) {
    this.router.navigate(['/notes/git-notes/' + id + '/edit']);
  }

  onDelete(id: string) {
    this.noteService.removeNote(id);
  }

}
