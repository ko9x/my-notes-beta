import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NoteService } from '../../service/note.service';
import { Note } from '../../note';

@Component({
  selector: 'app-git-note-edit',
  templateUrl: './git-note-edit.component.html',
  styleUrls: ['./git-note-edit.component.css']
})
export class GitNoteEditComponent implements OnInit, OnDestroy {

  private n;
  private currentNote;
  private noteId
  private subscription;
  private gitNoteForm: FormGroup;
  private sections = [
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
  ];


  constructor(private formBuilder: FormBuilder, private noteService: NoteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.noteId = params['id'];
        this.noteService.getNote(this.noteId)
        .subscribe(
          note => this.currentNote = note
          
        )
        
      }
      
    )
    this.initializeForm();
    setTimeout(() => { this.initializeForm(); }, 500);
    
  }

  

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initializeForm() {
    let noteSection = '';
    let noteTitle = '';
    let noteContent = '';
    let noteSide = '';
    let noteImportant = '';
    let noteIsEditable = false

    if(this.currentNote != null) {
      noteSection = this.currentNote.section
      noteTitle = this.currentNote.title
      noteContent = this.currentNote.content
      noteSide = this.currentNote.side
      noteImportant = this.currentNote.important
      noteIsEditable = this.currentNote.isEditable
    }
      
    this.gitNoteForm = this.formBuilder.group({
      section: [noteSection, Validators.required],
      title: [noteTitle, Validators.required],
      content: [noteContent, Validators.required],
      side: [noteSide],
      important: [noteImportant],
      isEditable: noteIsEditable
    })
  }
}