import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GitNotesListComponent } from './notes-lists/git-notes-list/git-notes-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteService } from './service/note.service';
import { notesRouting } from './notes.routing';
import { NoteItemComponent } from './note-item.component';
import { KeysPipe } from './pipes/keys.pipe';
import { AngularFireNotesListComponent } from './notes-lists/angular-fire-notes-list/angular-fire-notes-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    notesRouting
  ],
  declarations: [GitNotesListComponent, NoteEditComponent, NoteAddComponent, NoteItemComponent, KeysPipe, AngularFireNotesListComponent],
  providers: [NoteService]
})
export class NotesModule { }
