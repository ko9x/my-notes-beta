import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Note } from './note';
import { NoteService } from './service/note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() page: string
  @Input() note: Note
  private subscription;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEdit(id: string) {
    this.router.navigate(['/notes/' + this.page + '-notes/' + this.page + '/' + id + '/edit']);
  }

  onDelete(id: string) {
    this.noteService.removeNote(id);
  }

}
