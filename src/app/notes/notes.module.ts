import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';


import { GitNotesComponent } from './git-notes/git-notes.component';
import { GitNoteEditComponent } from './git-notes/git-note-edit/git-note-edit.component';
import { GitNoteAddComponent } from './git-notes/git-note-add/git-note-add.component';
import { NoteService } from './service/note.service';
import { notesRouting } from './notes.routing';
import { GitNoteItemComponent } from './git-notes/git-note-item.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBJUm2Qdj_jwCfgKKc1ImgaGzPzxmumtw4",
  authDomain: "my-notes-64d6a.firebaseapp.com",
  databaseURL: "https://my-notes-64d6a.firebaseio.com",
  storageBucket: "my-notes-64d6a.appspot.com",
  messagingSenderId: "921992896364"
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    notesRouting
  ],
  declarations: [GitNotesComponent, GitNoteEditComponent, GitNoteAddComponent, GitNoteItemComponent],
  providers: [NoteService]
})
export class NotesModule { }
