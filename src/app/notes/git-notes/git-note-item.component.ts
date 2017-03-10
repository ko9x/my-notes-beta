import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Note } from '../note';
import { NoteService} from '../service/note.service';

@Component({
  selector: 'app-git-note-item',
  templateUrl: './git-note-item.component.html',
  styleUrls: ['./git-note-item.component.css']
})
export class GitNoteItemComponent implements OnInit {

  @Input() note: Note
  @Input() noteId: number
  currentNote;

  constructor(private noteService: NoteService, private angularFire: AngularFire, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  onEdit(id: string) {
    this.router.navigate(['/notes/git-notes/' + id + '/edit']);
  }

  onDelete(id: string) {
    this.noteService.removeNote(id);
  }

}
