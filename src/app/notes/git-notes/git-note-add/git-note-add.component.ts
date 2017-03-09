import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-git-note-add',
  templateUrl: './git-note-add.component.html',
  styleUrls: ['./git-note-add.component.css']
})
export class GitNoteAddComponent implements OnInit {

  gitNoteForm: FormGroup;
  notes = [];
  sections = [
    'misc',
    'general',
    'commit',
    'log',
    'diff',
    'branch',
    'merge',
    'tag',
    'stash',
    'time-travel',
    'remote',
    'cloning'
  ]

  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.gitNoteForm = this.formBuilder.group({
      section: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      side: [''],
      important: [''],
      isEditable: false
    })
  }

  onSubmit() {
    this.noteService.storeNote(this.gitNoteForm.value)
      // .subscribe(
      // data => console.log(data),
      // error => console.log(error)
      // )
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/git-notes']);
  }



}
