import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NoteService } from '../service/note.service';
import { Note } from '../note';

@Component({
  selector: 'git-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit, OnDestroy {

  private currentNote;
  private noteId
  private subscription;
  private noteForm: FormGroup;
  private notePage: string = "";
  private sections: string[] = [];
  private headerTitle: string = "";

  private gitSections = ['misc', 'general', 'commit', 'log', 'diff', 'branch', 'merge', 'tag', 'stash', 'time-travel', 'remote', 'cloning']
  private angularFireSections = ['misc', 'methods']

  private gitHeaderTitle = 'Git/Github';
  private angularFireHeaderTitle = 'AngularFire2/Firebase';


  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id1')) {
          this.notePage = params['id1']
        }
        if (params.hasOwnProperty('id2')) {
          this.noteId = params['id2']
          this.noteService.getNote(this.noteId)
            .subscribe(
            note => this.currentNote = note
            )
        }
        if (this.notePage === 'git') {
          this.sections = this.gitSections;
          this.headerTitle = this.gitHeaderTitle;
        }
        if (this.notePage === 'angular-fire') {
          this.sections = this.angularFireSections;
          this.headerTitle = this.angularFireHeaderTitle;
        }
      }
    )
    this.initForm();
    setTimeout(() => { this.initForm(); }, 150);

  }

  initForm() {
    let noteSection = '';
    let noteTitle = '';
    let noteContent = '';
    let noteSide = '';
    let noteImportant = '';
    let noteIsEditable = false

    if (this.currentNote != null) {
      noteSection = this.currentNote.section
      noteTitle = this.currentNote.title
      noteContent = this.currentNote.content
      noteSide = this.currentNote.side
      noteImportant = this.currentNote.important
      noteIsEditable = this.currentNote.isEditable
    }

    this.noteForm = this.formBuilder.group({
      section: [noteSection, Validators.required],
      title: [noteTitle, Validators.required],
      content: [noteContent, Validators.required],
      side: [noteSide],
      important: [noteImportant],
      isEditable: noteIsEditable
    })
  }

  onSubmit() {
    this.noteService.updateNote(this.noteForm.value, this.noteId);
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  navigateBack() {
    this.router.navigate(['/' + this.notePage + '-notes']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}