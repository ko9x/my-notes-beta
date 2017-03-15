import { Component, OnInit } from '@angular/core';

import { NoteService } from '../notes/service/note.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.startNotes();
  }

}
