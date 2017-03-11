import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { NoteService } from '../../service/note.service';

@Component({
  selector: 'app-angular-fire-note-add',
  templateUrl: './angular-fire-note-add.component.html',
  styleUrls: ['./angular-fire-note-add.component.css']
})
export class AngularFireNoteAddComponent implements OnInit {

  private subscription;
  private noteSection: string = "";
  gitNoteForm: FormGroup;
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
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.noteSection = params['id']
        }
      }
    )
    this.initForm();
  }

  initForm() {
    this.gitNoteForm = this.formBuilder.group({
      section: [this.noteSection, Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      side: [''],
      important: [''],
      isEditable: false
    })
  }

  onSubmit() {
    this.noteService.storeNote(this.gitNoteForm.value)
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/git-notes']);
  }

}
