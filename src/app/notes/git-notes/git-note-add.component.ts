import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { NoteService } from '../service/note.service';

@Component({
  selector: 'app-git-note-add',
  templateUrl: './git-note-add.component.html',
  styleUrls: ['./git-note-add.component.css']
})
export class GitNoteAddComponent implements OnInit {

  gitNoteForm: FormGroup;
  notes = [];
  sections = [
    'General',
    'Commit',
    'Log',
    'Diff',
    'Branch',
    'Merge',
    'Tag',
    'Stash',
    'Time-Travel/Reset',
    'Remote',
    'Misc'
  ]

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit() {
    this.gitNoteForm = this.formBuilder.group({
      section: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSubmit() {
    this.noteService.storeNote(this.gitNoteForm.value)
      .subscribe(
      data => console.log(data),
      error => console.log(error)
      )
    this.gitNoteForm.reset();
  }

  // sendData() {
  //   this.noteService.storeNote()
  //     .subscribe(
  //     data => console.log(data),
  //     error => console.log(error)
  //     )
  // }

}
