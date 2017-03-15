import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesListComponent } from './notes-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteService } from './service/note.service';
import { notesRouting } from './notes.routing';
import { NoteItemComponent } from './note-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    notesRouting
  ],
  declarations: [NotesListComponent, NoteEditComponent, NoteAddComponent, NoteItemComponent],
  providers: [NoteService]
})
export class NotesModule { }
